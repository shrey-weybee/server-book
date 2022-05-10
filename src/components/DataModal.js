import React, { useEffect, useState } from 'react';

function DataModal({ params, onChangeFun }) {
  const [modal, setModal] = useState({});
  useEffect(() => {
    if (params) setModal(params.reduce((p,c)=>({...p,[c.value]:''}),{}));
  }, [params]);
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('server-book-params',JSON.stringify(modal))
    onChangeFun(modal);
  };
  const onLoadOld =()=>{
    const str=localStorage.getItem('server-book-params')
    if(str){
      setModal(JSON.parse(str))
    }
  }
  const handleChange = (e) => {
    setModal({ ...modal, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="modal-body">
                <div>
                  <button className="btn btn-link shadow-none btn-sm float-end" type="button" onClick={onLoadOld}>load old</button>
                </div>
                {params &&
                  params.map((p) => (
                    <div className="mb-3" key={p.value}>
                      <label className="form-label">{p.name}</label>
                      <input
                        type="text"
                        className="form-control"
                        name={p.value}
                        value={modal[p.value]}
                        onChange={handleChange}
                        placeholder={p.value}
                      />
                      <div id="emailHelp" className="form-text">
                        Example : {p.example}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataModal;
