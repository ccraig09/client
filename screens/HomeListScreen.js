import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import * as houseAction from "../redux/actions/houseAction";

const HomeListScreen = (props) => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const { houses } = useSelector((state) => state.house);

	useEffect(() => {
		setIsLoading(true);
		dispatch(houseAction.fetchHouses())
			.then(() => setIsLoading(false))
			.catch(() => setIsLoading(false));
	}, [dispatch]);

	if (isLoading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size={"large"} />
			</View>
		);
	}

	if (houses.length === 0 && !isLoading) {
		return (
			<View style={styles.centered}>
				<Text style={styles.text}>
					No home found. You could add one!
				</Text>
			</View>
		);
	}

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
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
