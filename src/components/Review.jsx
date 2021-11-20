import React from "react";
import useReview from "../hooks/useReview";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import Button from "./Button";

const styles = StyleSheet.create({
  formContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />
      <Button label="Create a review" onPress={onSubmit} />
    </View>
  );
};

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .required("Rating is requied"),
  text: yup.string().optional(),
});

const Review = () => {
  const navigate = useNavigate();
  const [createReview] = useReview();

  const onSubmit = async (values) => {
    try {
      const { data } = await createReview({
        ...values,
        rating: Number(values.rating),
      });

      navigate(`/repositories/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default Review;
