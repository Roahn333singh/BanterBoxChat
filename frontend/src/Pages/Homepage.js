import {
  Box,
  Container,
  TabList,
  TabPanels,
  Text,
  Tabs,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Homepage = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="#EAA0CF "
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Banter-Box
        </Text>
      </Box>
      <Box
        p={4}
        bg="white"
        w="100%"
        borderRadius="lg"
        textColor={"black"}
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="pink">
          <TabList mb={"1em"}>
            <Tab width={"50%"} _selected={{ color: 'white', bg: 'blue.500' }}>Login</Tab>
            <Tab width={"50%"} _selected={{ color: 'white', bg: 'green.400' }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
