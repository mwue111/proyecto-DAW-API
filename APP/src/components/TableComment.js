import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const TableComment = ({ fetchUrl }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    axios.get(fetchUrl)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateCommentVerified = (commentId, verified) => {
    axios.put(`${fetchUrl}/${commentId}`, { verified: verified ? 1 : 0 })
      .then(() => {
        fetchComments(); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteComment = (commentId) => {
    axios.delete(`${fetchUrl}/${commentId}`)
      .then(() => {
        fetchComments(); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleVerifiedChange = (e, rowData) => {
    const commentId = rowData.id;
    const verified = e.target.checked; 
  
    updateCommentVerified(commentId, verified);
  };

  const actionTemplate = (rowData) => {
    const commentId = rowData.id;
  
    const handleDeleteClick = () => {
      deleteComment(commentId);
    };
  
    return (
      <div>
        <button
          className={`p-button p-button-sm ${rowData.verified ? 'p-button-danger' : 'p-button-secondary'}`}
          disabled={rowData.verified}
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <div>
      <DataTable value={comments} paginator rows={10} emptyMessage="No comments found">
        <Column field="nombre" header="Nombre" />
        <Column field="comentario" header="Comentario" />
        <Column field="verified" header="Verificado" body={(rowData) => (
          <input
            type="checkbox"
            checked={rowData.verified === 1}
            onChange={(e) => handleVerifiedChange(e, rowData)}
          />
        )} />
        <Column body={actionTemplate} style={{ textAlign: 'center', width: '8rem' }} />
      </DataTable>
    </div>
  );
};

export default TableComment;