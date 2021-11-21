import React, { useState } from "react";
import { FlatList, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import OrderSelection from "./OrderSelection";
import { useDebounce } from "use-debounce";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBg,
    marginBottom: 70,
  },
});

const RepositoryListItem = ({ item, navigate }) => {
  const handlePress = () => {
    navigate(`/repositories/${item.id}`);
  };
  return (
    <Pressable onPress={handlePress}>
      <RepositoryItem item={item} />
    </Pressable>
  );
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;
    return (
      <RepositoryListHeader
        filter={props.filter}
        handleFilterChange={props.handleFilterChange}
        order={props.selectedOrder}
        handleOrderChange={props.handleOrderChange}
      />
    );
  };

  repositoryNodes() {
    return this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];
  }

  render() {
    return (
      <FlatList
        data={this.repositoryNodes()}
        renderItem={({ item }) => (
          <RepositoryListItem item={item} navigate={this.props.navigate} />
        )}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
        style={styles.container}
      />
    );
  }
}

const RepositoryListHeader = ({
  filter,
  handleFilterChange,
  order,
  handleOrderChange,
}) => {
  return (
    <>
      <Searchbar
        placeholder="Search"
        value={filter}
        onChangeText={handleFilterChange}
      />
      <OrderSelection selectedOrder={order} handleChange={handleOrderChange} />
    </>
  );
};

const RepositoryList = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState("CREATED_AT DESC");
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const { repositories, fetchMore } = useRepositories(
    ...selectedOrder.split(" "),
    debouncedFilter,
    5
  );

  const handleOrderChange = (value) => {
    setSelectedOrder(value);
  };

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      filter={filter}
      handleFilterChange={(text) => setFilter(text)}
      order={selectedOrder}
      handleOrderChange={handleOrderChange}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
