import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
  width
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        width={width}
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        selectedItem={values[name]}
      />

      <ErrorMessage error={errors[name]} visible={touched} />
    </>
  );
}

export default AppFormPicker;
