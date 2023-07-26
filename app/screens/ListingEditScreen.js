import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import { flag } from "arg";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(1)
    .label("Title"),
  price: Yup.string()
    .required()
    .min(1)
    .max(10000)
    .label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object()
    .required()
    .nullable()
    .label("Category"),
  images: Yup.array().min(1, "Please select at least one image")
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "yellow", icon: "apps" },
  { label: "soap", value: 2, backgroundColor: "green", icon: "email" },
  { label: "cutlery", value: 3, backgroundColor: "blue", icon: "lock" }
];
function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async listing => {
    setProgress(0);
    setUploadVisible(true);
    console.log("listing" + JSON.stringify(listing));
    const result = await listingsApi.addListing(
      { ...listing, location },
      progress => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
  };
  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      ></UploadScreen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          image: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="image" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          KeyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          // PickerItemComponent={CategoryPickerItem}
          // numberOfColumns={3}
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default ListingEditScreen;
