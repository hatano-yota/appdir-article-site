import { Box, Spinner } from "./components/common";

const Loading = () => {
  return (
    <Box justifyContent="center" display="flex" mt={10}>
      <Spinner color="orange.400" size="xl" />
    </Box>
  );
};

export default Loading;
