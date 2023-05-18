import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import * as houseAction from "../redux/actions/houseAction";

const HomeListScreen = (props) => {
	const dispatch = useDispatch();

	const { houses } = useSelector((state) => state.house);

	useEffect(() => {
		dispatch(houseAction.fetchHouses());
	}, [dispatch]);

	return (
		<View style={styles.container}>
			<FlatList
				data={houses}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<Card
						navigation={props.navigation}
						title={item.title}
						address={item.address}
						homeType={item.homeType}
						description={item.description}
						price={item.price}
						image={item.image}
						yearBuilt={item.yearBuilt}
						id={item._id}
					/>
				)}
			/>
			<FloatingAction
				position="right"
				animated={false}
				showBackground={false}
				onPressMain={() => props.navigation.navigate("AddHome")}
			/>
		</View>
	);
};

export default HomeListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
