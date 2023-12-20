import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import FormComponent from "@/app/components/FormComponent";
import AnimatedPage from "@/app/components/layouts/AnimatedPage";
import StandardContainer from "@/app/components/layouts/StandardContainer";
import SucessBackDrop from "@/app/components/SucessBackDrop";
import StandardButton from "@/app/components/layouts/StandardButton";
import isAuth from "@/app/components/auth/isAuth";

const CreateAdForm = ({
  params: { adType },
}: {
  params: { adType: string };
}) => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const handleSuccess = async (data: typeof inititalValues) => {
    const apiUrl = "https://formsubmit.co/chaipanch98@email.com";
    await axios.post(apiUrl, data);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      router.push("/create-ads");
    }, 1000);
  };

  const inititalValues = {
    heading1: "",
    heading2: "",
    description: "",
    bussiness_name: "",
    button_label: "",
    website_url: "",
    ...(adType === "media" && {
      landscape_image: "",
      portrait_image: "",
      square_image: "",
      video_url: "",
    }),
  };
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: inititalValues,
    validationSchema: Yup.object().shape({
      heading1: Yup.string().required("This field is required"),
      heading2: Yup.string().required("This field is required"),
      description: Yup.string().required("This field is required"),
      bussiness_name: Yup.string().required("This field is required"),
      button_label: Yup.string().required("This field is required"),
      website_url: Yup.string()
        .required("This field is required")
        .url("Invalid URL format. Please enter a valid URL."),
      ...(adType === "media" && {
        landscape_image: Yup.string()
          .required("This field is required")
          .url("Invalid URL format. Please enter a valid URL."),
        portrait_image: Yup.string()
          .required("This field is required")
          .url("Invalid URL format. Please enter a valid URL."),
        square_image: Yup.string()
          .required("This field is required")
          .url("Invalid URL format. Please enter a valid URL."),
        video_url: Yup.string()
          .required("This field is required")
          .url("Invalid URL format. Please enter a valid URL."),
      }),
    }),
    onSubmit: handleSuccess,
  });

  return (
    <AnimatedPage>
      <StandardContainer>
        {success && <SucessBackDrop />}
        <form onSubmit={handleSubmit}>
          <Box marginTop="20px" display={"flex"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              minHeight={"75vh"}
              justifyContent={"space-between"}
              gap={"10px"}
            >
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Box
                  display={"flex"}
                  gap={"30px"}
                  flexDirection={{
                    xs: "column",
                    md: "row",
                  }}
                >
                  <Box flex={1}>
                    <FormComponent
                      label="Heading 01"
                      placeholder="Add a heading that would make users interested"
                      value={values.heading1}
                      name={"heading1"}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={Boolean(
                        touched.heading1 && Boolean(errors.heading1)
                      )}
                      helperText={touched.heading1 ? errors.heading1 ?? "" : ""}
                    />

                    <FormComponent
                      label="Heading 02"
                      placeholder="Add a heading that would make users interested"
                      value={values.heading2}
                      name={"heading2"}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={Boolean(
                        touched.heading2 && Boolean(errors.heading2)
                      )}
                      helperText={touched.heading2 ? errors.heading2 ?? "" : ""}
                    />
                  </Box>
                  <Box flex={1}>
                    <FormComponent
                      label="Description 01"
                      placeholder="Add primary text to help user understand more about your products, services or offers"
                      fullHeight={true}
                      value={values.description}
                      name={"description"}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={Boolean(touched.description && errors.description)}
                      helperText={
                        touched.description ? errors.description ?? "" : ""
                      }
                    />
                  </Box>
                </Box>

                {adType === "media" && (
                  <>
                    <Box display={"flex"} gap={"30px"}>
                      <Box flex={1}>
                        <FormComponent
                          label="Landscape Marketing Image (1.9:1)"
                          placeholder="Add a the URL of the image you want to use for the ad"
                          value={values.landscape_image ?? ""}
                          name={"landscape_image"}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={Boolean(
                            touched.landscape_image && errors.landscape_image
                          )}
                          helperText={
                            touched.landscape_image
                              ? errors.landscape_image ?? ""
                              : ""
                          }
                        />
                      </Box>
                      <Box flex={1}>
                        <FormComponent
                          label="Portrait Marketing Image (4:5)"
                          placeholder="Add a the URL of the image you want to use for the ad"
                          value={values.portrait_image ?? ""}
                          name={"portrait_image"}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={Boolean(
                            touched.portrait_image && errors.portrait_image
                          )}
                          helperText={
                            touched.portrait_image
                              ? errors.portrait_image ?? ""
                              : ""
                          }
                        />
                      </Box>
                      <Box flex={1}>
                        <FormComponent
                          label="Square Marketing Image (1:1)"
                          placeholder="Add a the URL of the image you want to use for the ad"
                          value={values.square_image ?? ""}
                          name={"square_image"}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          error={Boolean(
                            touched.square_image && errors.square_image
                          )}
                          helperText={
                            touched.square_image
                              ? errors.square_image ?? ""
                              : ""
                          }
                        />
                      </Box>
                    </Box>

                    <FormComponent
                      label="Video URL"
                      placeholder="Add a the URL of the image you want to use for the ad"
                      value={values.video_url ?? ""}
                      name={"video_url"}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={Boolean(touched.video_url && errors.video_url)}
                      helperText={
                        touched.video_url ? errors.video_url ?? "" : ""
                      }
                    />
                  </>
                )}
                <Box display={"flex"} gap={"30px"}>
                  <Box flex={1}>
                    <FormComponent
                      label="Bussiness Name"
                      placeholder="Add your bussiness name"
                      value={values.bussiness_name}
                      name={"bussiness_name"}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={Boolean(
                        touched.bussiness_name && errors.bussiness_name
                      )}
                      helperText={
                        touched.bussiness_name
                          ? errors.bussiness_name ?? ""
                          : ""
                      }
                    />
                  </Box>
                  <Grid flex={1}>
                    <FormComponent
                      label="Button Label"
                      placeholder="Select a label that best suits your add"
                      value={values.button_label}
                      name={"button_label"}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      error={Boolean(
                        touched.button_label && errors.button_label
                      )}
                      helperText={
                        touched.button_label ? errors.button_label ?? "" : ""
                      }
                    />
                  </Grid>
                </Box>
                <FormComponent
                  label="Website URL"
                  placeholder="Add the URL of the page that you want to redirect your users to"
                  value={values.website_url}
                  name={"website_url"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={Boolean(touched.website_url && errors.website_url)}
                  helperText={
                    touched.website_url ? errors.website_url ?? "" : ""
                  }
                />
              </Box>

              <Box
                display={"flex"}
                justifyContent="flex-end"
                alignItems="flex-end"
                style={{ gap: "30px" }}
              >
                <StandardButton
                  displayText="Back"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "2px solid #dadada",
                  }}
                  onClick={() => router.back()}
                />

                <StandardButton
                  // onClick={handleSuccess}
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  displayText={isSubmitting ? "Submitting..." : "Submit"}
                />
              </Box>
            </Box>
          </Box>
        </form>
      </StandardContainer>
    </AnimatedPage>
  );
};

export default isAuth(CreateAdForm);
