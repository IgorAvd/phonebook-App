import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import { BtnStyle, WrapperForm } from "./ContactForm.styled";
import { string, number, object } from "yup";
import { selectContacts, selectIsLoading } from "../../redux/Contacts/selector";
import { addContactsThunk } from "../../redux/Contacts/operations";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { notifyError, notifySuccess } from "../../Helpers/ToastNotification";
import { ThreeCirclesComp } from "../../Helpers/ThreeCircles";

let userSchema = object({
  name: string().min(3, "Must be at least 3 characters").required(),
  number: number()
    .required()
    .typeError("Must be a number")
    .positive()
    .integer(),
});

type FormValues = {
  name: string;
  number: string;
};

export const ContactForm = () => {
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 960px)");
  const isDesktop = useMediaQuery("(min-width: 961px)");
  const adaptiveContactForm = isDesktop
    ? "700px"
    : isTablet
    ? "500px"
    : "300px";

  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const { name, number } = values;
    const newContact = { id: nanoid(), name, number };
    const isContactExists = contacts?.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExists) {
      notifyError(`${name} is already in contacts.`);
      return;
    } else {
      dispatch(addContactsThunk(newContact));
      notifySuccess("Contact is added!");
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {({ getFieldProps, touched, errors }) => (
        <WrapperForm style={{ width: adaptiveContactForm }}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              {...getFieldProps("name")}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="number"
              label="Number"
              type="tel"
              variant="outlined"
              {...getFieldProps("number")}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
            />
          </Box>
          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            sx={BtnStyle}
          >
            {isLoading ? <ThreeCirclesComp /> : "Add contact"}
          </Button>
        </WrapperForm>
      )}
    </Formik>
  );
};
