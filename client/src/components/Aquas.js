import React, { useState, useEffect } from "react";
import "axios";
import axios from "axios";
import Aqua from "./Aqua";
import { Link } from "react-router-dom";
import AquaForm from "./AquaForm";

const Aquas = () => {
  const [aquas, setAquas] = useState([]);

  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    axios.get("/api/aquas").then((res) => {
      setAquas(res.data);
    });
  }, []);

  // create a function
  // maps over the aquas --> a new component
  const renderAquas = () => {
    return aquas.map((a) => <Aqua {...a} editAqua={editAqua} delete={deleteAqua}/>);
  };

  // add function
  const addAqua = (newAqua) => {
    // my axios POST
    axios.post("/api/aquas", newAqua).then((res) => {
      debugger;
      setAquas([res.data, ...aquas]);
    });
  };

  // edit
  const editAqua = (id, editAq) => {
    // axios
    axios.put(`/api/aquas/${id}`, editAq).then((res) => {
      const newAquas = aquas.map((aq) => {
        if (aq.id === id) {
          return res.data;
        }
        return aq;
      });
      setAquas(newAquas)
    });
    // compare the res.data to everything else in our current array
  };


  // delete
  const deleteAqua = (id) => {
    axios.delete(`/api/aquas/${id}`).then(res => {
      const notDeletedArray = aquas.filter(aq => {
        if (aq.id !== id) {
          return aq
        }
      })
      setAquas(notDeletedArray)
    })
  };

  return (
    <div>
      <h2 className="title">Aquas</h2>
      {showAdd ? <AquaForm addAqua={addAqua} /> : null}
      <button onClick={() => setShowAdd(!showAdd)}>
        {showAdd ? "Close" : "Open Form"}
      </button>
      {renderAquas()}
    </div>
  );
};

export default Aquas;
