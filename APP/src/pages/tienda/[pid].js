import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import axios from 'axios';
import { useRouter } from 'next/router';
import StoreMap from '@/components/StoreMap';
import { formatJsonDireccion } from '@/helpers/helper';
import StoreTitle from '@/components/StoreTitle';
import StoreInfo from '@/components/StoreInfo';
import { useAuth } from '@/hooks/auth';
import EditStoreDialog from '@/components/EditStoreDialog';
import { Image } from 'primereact/image';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import DialogProduct from '@/components/DialogProduct';


const Tienda = () => {
  
  const { user } = useAuth();
  const [selectedStore, setSelectedStore] = useState({});
  const router = useRouter();
  const { pid } = router.query; // id received as a parameter
  const [storeUpdated, setStoreUpdated] = useState(false);
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
      nombre: "",
      descripcion: "",
      deleted: 0
    });
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedProductToDelete, setSelectedProductToDelete] = useState(null);
  const [showNewDialog, setShowNewDialog] = useState(false);
  const [dialogData, setDialogData] = useState({
    stock: '',
    precio: '',
    unidad: '',
    comentarios: '',
  });

  useEffect(() => {
    if (!pid) return;
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/${pid}`) // pid is the store id (http://localhost:8000/tienda/)
      .then((response) => {
        setSelectedStore(response.data);
      });
  }, [pid, storeUpdated]);

  useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/categoria')
        .then(response => {
          const categories = response.data;
          setAllCategories(categories);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    
      axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/marca')
        .then(response => {
          const brands = response.data;
          setBrands(brands);
        })
        .catch(error => {
          console.error('Error fetching brands:', error);
        });
    
      axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/etiqueta')
        .then(response => {
          const tags = response.data;
          setAllTags(tags);
        })
        .catch(error => {
          console.error('Error fetching tags:', error);
        });
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/producto`)
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleStoreUpdated = () => {
    setStoreUpdated(!storeUpdated);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const formatTags = (tags) => {
    let tagId = [];

    for (let i = 0; i < tags.length; i++) {
        tagId.push(tags[i].id);
    }

    return tagId;
  }

  const handleButtonClick = () => {
    if (selectedProduct) {
      console.log('Selected product:', selectedProduct);
      setShowAddDialog(true);
    } else {
      setShowAddDialog(false);
    }
  };

  const handleAddProduct = () => {
    if (
      dialogData.stock &&
      dialogData.precio &&
      dialogData.unidad &&
      dialogData.comentarios
    ) {
      const requestData = {
        storeId: selectedStore.id,
        productId: selectedProduct.id,
        stock: dialogData.stock,
        precio: dialogData.precio,
        unidad: dialogData.unidad,
        comentarios: dialogData.comentarios,
      };

      axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/productoexistente`,
        requestData
      )
      .then((response) => {
        console.log('Product added:', response.data);
        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/${pid}`)
          .then((response) => {
            setSelectedStore((prevStore) => ({
              ...prevStore,
              products: response.data.products,
            }));
          })
          .catch((error) => {
            console.error('Failed to fetch store products:', error);
          });
      })
      .catch((error) => {
        console.error('Failed to add product:', error);
      });

    setShowAddDialog(false);
    resetDialogData();
    }
  };

  const handleAddNewProduct = () => {
    if (
      selectedProduct.nombre &&
      selectedProduct.descripcion &&
      selectedProduct.categoria &&
      selectedProduct.marca &&
      selectedProduct.tags
    ) {
      const productData = {
        name: selectedProduct.nombre,
        description: selectedProduct.descripcion,
        category: selectedProduct.categoria.id,
        brand: selectedProduct.marca.id,
        tags: formatTags(selectedProduct.tags),
        deleted: 0,
      };
      console.log('selectedProduct: ')
      console.log(selectedProduct)

  
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/producto`, productData)
        .then((response) => {
          console.log('Product added:', response.data);
  
          if (selectedProduct.product_img) {
            axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/producto/${response.data.name}`) 
          .then((response) => {
            const productId = response.data.id;
            console.log('productId: ', productId);
          

            setTimeout(() => {
                // if(itemDB.product_img){

                for (let i = 0; i < selectedProduct['product_img'].length; i++) {
                    const formData = new FormData();
                    formData.append('file', selectedProduct['product_img'][i]);
                    formData.append('user_id', user.id);
                    formData.append('image_type', 'product_imgs');
                    formData.append('name', selectedProduct['product_img'][i].name);
                    formData.append('product_id', productId);

                    // for(var key of formData.entries()){
                    //     console.log(key[0], ' - ', key[1]);
                    // }

                    axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo', formData)
                        .then(res => console.log('res: ', res));
                }
                // }
            }, 2000);})
          }
          
    

              setSelectedStore((prevStore) => ({
                ...prevStore,
                products: response.data.products,
              }));
              axios
              .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/producto`)
              .then((response) => {
                setProducts(response.data);
              });
              setShowNewDialog(false);
            }
            
        )
        .catch((error) => {
          console.error('Failed to add product:', error);
        });
    }
  };
  

  const handleNewProduct = () => {
    setShowNewDialog(true);
  };

  const handleCancelButtonClick = () => {
    setShowAddDialog(false);
    resetDialogData();
  };

  const handleAddButtonClick = (product) => {
    handleProductSelect(product);
    setShowAddDialog(true);
  };

  const handleDeleteProduct = (product) => {
    setSelectedProductToDelete(product);
    setShowDeleteDialog(true);
  };

  const confirmDeleteProduct = () => {
    const requestData = {
      storeId: selectedStore.id,
      productId: selectedProductToDelete.id,
    };
  
    axios
      .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/productoexistente`, {
        data: requestData,
      })
      .then((response) => {
        console.log('Product deleted:', response.data);
        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/${pid}`)
          .then((response) => {
            setSelectedStore((prevStore) => ({
              ...prevStore,
              products: response.data.products,
            }));
          })
          .catch((error) => {
            console.error('Failed to fetch store products:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  
    setShowDeleteDialog(false);
  };

  const productFilter = (product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  };

  const panelListItemTemplate = (product) => {
    return (
      <div className="col-12">
        <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
          <div className="text-center md:text-left md:flex-1">
            <div className="text-2xl font-bold">
              <a href={`/producto/${product.id}`}>{product.name}</a>
            </div>
            <div className="mb-3">{product.description}</div>
          </div>
          <div>
            <Button
              icon="pi pi-plus"
              className="p-button-success"
              onClick={() => handleAddButtonClick(product)}
            />
          </div>
        </div>
      </div>
    );
  };

  const productListItemTemplate = (product) => {
    return (
      <div className="col-12">
        <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
          <div className="text-center md:text-left md:flex-1">
            <div className="text-2xl font-bold">
              <a href={`/producto/${product.id}`}>{product.name}</a>
            </div>
            <div className="mb-3">{product.description}</div>
          </div>
          <div>
            <Button
              icon="pi pi-minus"
              className="p-button-danger"
              onClick={() => handleDeleteProduct(product)}
            />
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product, layout) => {
    if (!product) {
      return null;
    }

    if (layout === 'list') {
      return panelListItemTemplate(product);
    }

    return productListItemTemplate(product);
  };

  const itemDialogFooter = (
    <div>
      <Button
        label="Añadir"
        icon="pi pi-check"
        onClick={handleAddNewProduct}
        className="p-button-success"
      />
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={()=>setShowNewDialog(false)}
        className="p-button-secondary"
      />
    </div>
  );

  const resetDialogData = () => {
    setDialogData({
      stock: '',
      precio: '',
      unidad: '',
      comentarios: '',
    });
  };

  return (
    <AppLayout
      header={
        selectedStore && (
          <div className="flex flex-col justify-items-center">
            <StoreTitle store={selectedStore} />
            {((user?.type === 'owner' &&
              user?.id === selectedStore?.user_id) ||
              user?.type === 'administrator') && (
              <div className="flex flex-col justify-items-center">
                <EditStoreDialog
                  store={selectedStore}
                  onUpdate={handleStoreUpdated}
                />
                <Panel header="Search and Select Product" toggleable>
                  <div className="p-fluid">
                    <div className="p-field">
                      <label htmlFor="searchInput">Search Product</label>
                      <InputText
                        id="searchInput"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    {searchQuery && (
                      <DataView
                        value={products.filter(productFilter)}
                        layout="list"
                        itemTemplate={itemTemplate}
                        paginator
                        rows={10}
                        selectionMode="single"
                        selection={selectedProduct}
                        onSelectionChange={(e) => handleProductSelect(e.value)}
                      />
                    )}
                  </div>
                  <div className="text-center mt-4">
                    <Button label="Añadir producto nuevo" onClick={handleNewProduct} />
                  </div>
                </Panel>
                <Dialog
                    visible={showAddDialog}
                    onHide={() => {
                      setShowAddDialog(false);
                      resetDialogData();
                    }}
                  >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">
                      No product selected.
                    </h3>
                    <Button
                      label="Añade un nuevo producto"
                      onClick={() => {
                        // Define the behavior for adding a new product
                        console.log('Add new product');
                      }}
                    />
                  </div>
                </Dialog>
              </div>
            )}
          </div>
        )
      }
    >
      <Head>
        {selectedStore ? (
          <title>LocAlmeria - {selectedStore.name} : "Tienda"</title>
        ) : (
          <title>LocAlmeria - Tienda</title>
        )}
      </Head>
      <div className="py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 mb-5 bg-white rounded-lg">
          <div className="col-span-1 flex justify-center items-center ml-4">
            {selectedStore && (
              <div className="border-8 border-color-slate-800 rounded-l-lg">
                {selectedStore?.store_imgs?.length > 0 ? (
                  <Image
                    src={selectedStore?.store_imgs[0].file.url}
                    width={300}
                    height={300}
                    alt={selectedStore?.name}
                    style={{ display: 'block' }}
                  />
                ) : (
                  <Image
                    src="https://via.placeholder.com/300x300.png?text=No+Image"
                    width={300}
                    height={300}
                    alt={selectedStore?.name}
                    style={{ display: 'block' }}
                  />
                )}
              </div>
            )}
          </div>
          <div className="col-span-2 p-6">
            {selectedStore && <StoreInfo info={selectedStore} />}
          </div>
          <div className="col-span-1">
            {selectedStore && (
              <div className="border-8 border-color-slate-800 rounded-l-lg">
                <StoreMap
                  address={formatJsonDireccion(selectedStore?.address)}
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                />
              </div>
            )}
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {selectedStore && (
              <DataView
                value={selectedStore.products}
                layout="pepe"
                itemTemplate={itemTemplate}
                paginator
                rows={10}
              />
            )}
          </div>
        </div>
      </div>
      <Dialog
        visible={showAddDialog}
        onHide={() => {
          setShowAddDialog(false);
          resetDialogData();
        }}
      >
        <div className="p-fluid">
          <h3>Add Existing Product</h3>
          <div className="p-field">
            <label htmlFor="stockInput">Stock</label>
            <InputText
              id="stockInput"
              value={dialogData.stock}
              onChange={(e) =>
                setDialogData((prevState) => ({
                  ...prevState,
                  stock: e.target.value,
                }))
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="precioInput">Precio</label>
            <InputText
              id="precioInput"
              value={dialogData.precio}
              onChange={(e) =>
                setDialogData((prevState) => ({
                  ...prevState,
                  precio: e.target.value,
                }))
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="unidadInput">Unidad de medida(Litro, Kilo)</label>
            <InputText
              id="unidadInput"
              value={dialogData.unidad}
              onChange={(e) =>
                setDialogData((prevState) => ({
                  ...prevState,
                  unidad: e.target.value,
                }))
              }
            />
          </div>
          <div className="p-field">
            <label htmlFor="comentariosInput">Comentarios</label>
            <InputText
              id="comentariosInput"
              value={dialogData.comentarios}
              onChange={(e) =>
                setDialogData((prevState) => ({
                  ...prevState,
                  comentarios: e.target.value,
                }))
              }
            />
          </div>
          <div className="p-field">
            <Button
              label="Añadir producto"
              onClick={handleAddProduct}
              className="p-mr-2"
            />
            <Button
              label="Cancelar"
              onClick={handleCancelButtonClick}
              className="p-button-secondary"
            />
          </div>
        </div>
      </Dialog>
      <Dialog
        visible={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">¿Estás seguro?</h3>
          <div className="flex justify-center">
            <Button
              label="Sí"
              onClick={confirmDeleteProduct}
              className="p-button-danger p-mr-2"
            />
            <Button
              label="No"
              onClick={() => setShowDeleteDialog(false)}
              className="p-button-secondary"
            />
          </div>
        </div>
      </Dialog>
      <Dialog
                visible={showNewDialog}
                style={{ width: '700px' }}
                header={`Añadir producto`}
                modal className="p-fluid"
                footer={itemDialogFooter}
                onHide={() => setShowNewDialog(false)}
            >
        <DialogProduct
          product={selectedProduct}
          setItem={setSelectedProduct}
          allCategories={allCategories}
          brands={brands}
          allTags={allTags}
          table={selectedStore.products}
        />
      </Dialog>
    </AppLayout>
  );
};

export default Tienda;
