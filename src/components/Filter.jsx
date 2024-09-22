import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Filter users"
    />
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
