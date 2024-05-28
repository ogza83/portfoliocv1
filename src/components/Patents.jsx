import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Patents() {
  const patents = [
    {
      number: "63/549,997",
      title: "DISPLAY AND UX BASED ON USER CHRONOTYPE",
    },
    {
      number: "63/549,998",
      title: "AUTOMATED CALENDARING BASED ON DEVICE USAGE",
    },
    {
      number: "63/550,000",
      title: "OBJECTIVE-ORIENTED USER EXPERIENCE",
    },
    {
      number: "63/550,005",
      title: "INFLUENCER-BASED USER EXPERIENCE",
    },
    {
      number: "63/550,006",
      title: "RELATIONSHIP-BASED APPLICATION CONTENT",
    },
    {
      number: "63/550,008",
      title: "APPLICATION-LEVEL OPERATING SYSTEM",
    },
    {
      number: "18/652,126",
      title:
        "MATCHING DESCRIPTIVE TEXTS BASED ON EXPERIENCE AND SERVICE REQUESTS",
    },
    {
      number: "63/043,233",
      title: "SENSOR SYSTEM",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Call useColorModeValue outside the loop
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const secondaryTextColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box bg="gray.100" py={16}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box
          maxW="container.md"
          mx="auto"
          p={8}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg="white"
        >
          <Heading as="h1" size="xl" mb={8} color="gray.800">
            Patents
          </Heading>

          <VStack spacing={4} align="stretch">
            {patents.map((patent, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Box
                  bg={bgColor} // Use the pre-calculated bgColor
                  p={4}
                  borderRadius="md"
                  shadow="md"
                  _hover={{ shadow: "lg" }}
                  transition="shadow 0.3s"
                >
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color={textColor}
                    mb={2}
                  >
                    {patent.number}
                  </Text>
                  <Text color={secondaryTextColor}>{patent.title}</Text>
                </Box>
              </motion.div>
            ))}
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Patents;
