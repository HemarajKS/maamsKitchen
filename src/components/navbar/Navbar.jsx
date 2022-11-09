import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { getData } from "../../redux/api";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const recipe = useSelector((state) => state.fetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(search));
  }, [dispatch, search]);

  return (
    <div className="logo">
      {" "}
      <div className="heading">Maams Kitchen</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(e.target.search.value);
        }}
      >
        <input type="text" name="search" className="inputField" />
      </form>{" "}
    </div>
  );
};

export default Navbar;
