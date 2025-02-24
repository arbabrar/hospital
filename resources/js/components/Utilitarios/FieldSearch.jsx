import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const FieldSearch = ({ placeholder, getData }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      getData(searchValue);
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon2"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button
        variant="primary"
        id="button-addon2"
        onClick={handleSearch}
        disabled={searchValue.trim() === ""}
      >
        <FaSearch /> 
        Buscar
      </Button>
    </InputGroup>
  );
};

export default FieldSearch;
