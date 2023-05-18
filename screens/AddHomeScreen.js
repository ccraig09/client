import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import { Formik } from "formik";
// import * as Yup from "yup";

const AddHomeScreen = () => {
	return (
		<ScrollView>
			<Formik
				initialValues={{
					title: "",
					image: "",
					homeType: "",
					price: "",
					yearBuilt: "",
					address: "",
					description: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(props) => (
					<View style={styles.form}>
						<View style={styles.formGroup}>
							<Text style={styles.label}>Title</Text>
							<TextInput
								style={styles.input}
								onChangeText={props.handleChange("title")}
								value={props.values.title}
							/>
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.label}>Image URL</Text>
							<TextInput
								style={styles.input}
								onChangeText={props.handleChange("image")}
								value={props.values.image}
							/>
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.label}>Home Type</Text>
							<TextInput
								style={styles.input}
								onChangeText={props.handleChange("homeType")}
								value={props.values.homeType}
							/>
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.label}>Price</Text>
							<TextInput
								style={styles.input}
								onChangeText={props.handleChange("price")}
								value={props.values.price}
							/>
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.label}>Year Built</Text>
							<TextInput
								style={styles.input}
								onChangeText={props.handleChange("yearBuilt")}
								value={props.values.yearBuilt}
							/>
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.label}>Address</Text>
							<TextInput
								style={styles.input}
								multiline
								onChangeText={props.handleChange("address")}
								value={props.values.address}
							/>
						</View>
						<View style={styles.formGroup}>
							<Text style={styles.label}>Description</Text>
							<TextInput
								style={styles.input}
								multiline
								onChangeText={props.handleChange("description")}
								value={props.values.description}
							/>
						</View>
						<View style={styles.buttonContainer}>
							<Button title="Add Home" />
						</View>
					</View>
				)}
			</Formik>
		</ScrollView>
	);
};

export default AddHomeScreen;

const styles = StyleSheet.create({
	form: {
		margin: 20,
		backgroundColor: "#ffffff",
		padding: 20,
		borderRadius: 10,
	},
	formGroup: {
		width: "100%",
	},
	label: {
		marginVertical: 10,
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 8,
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
	buttonContainer: {
		marginTop: 20,
	},
});
