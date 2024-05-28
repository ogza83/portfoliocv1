import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Education() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const educationItems = [
    {
      degree: "Executive Leadership",
      institution: "Cornell University",
      year: "2020",
    },
    {
      degree: "Computer Networks Engineering",
      institution: "RCC Institute of Technology",
      location: "Toronto, Canada",
      year: "2004",
    },
  ];

  const certificationItems = [
    {
      name: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "May 2024",
      id: "JK279QJ6QE6L",
    },
    {
      name: "Programming with JavaScript",
      issuer: "Meta",
      date: "May 2024",
      id: "S83KNG4PBDMJ",
    },
    {
      name: "Prompt Engineering with GPT: Programming for Custom Content",
      issuer: "Coursera",
      date: "May 2024",
      id: "Y4CCER7JDZKP",
      skills: ["Artificial Intelligence (AI)", "Machine Learning"],
    },
    {
      name: "Version Control",
      issuer: "Meta",
      date: "May 2024",
      id: "DKW7LS56XQPE",
    },
    {
      name: "Web3 and Blockchain Fundamentals",
      issuer: "Coursera",
      date: "May 2024",
      id: "DSJX8TS2G677",
      skills: ["Web3", "Blockchain", "Smart Contracts", "DOA"],
    },
    {
      name: "Certified Entrepreneurship and Business Coach",
      issuer: "Transformation Academy",
      date: "Feb 2023",
      id: "4564769",
    },
    {
      name: "Balanced Scorecard and Key Performance Indicators",
      issuer: "LinkedIn",
      date: "Dec 2021",
    },
    {
      name: "SCMS-A",
      issuer:
        "SMstudy - Global Accreditation Body for Sales and Marketing Certifications",
      date: "Apr 2017",
      id: "569055",
    },
    {
      name: "SFC",
      issuer: "SCRUMstudy - Accreditation Body for Scrum and Agile",
      date: "Apr 2017",
      id: "573081",
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
          <Heading as="h1" size="xl" color="gray.800">
            Education
          </Heading>

          {/* Education Section */}
          <VStack spacing={4} align="stretch" mt={4}>
            {educationItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Box p={4} bg="white" borderRadius="md" shadow="md">
                  <Heading as="h3" size="md" color="gray.800" mb={2}>
                    {item.degree}
                  </Heading>
                  <Text color="gray.600">
                    {item.institution}
                    {item.location && ` | ${item.location}`}
                  </Text>
                  <Text color="gray.600">{item.year}</Text>
                </Box>
              </motion.div>
            ))}
          </VStack>

          <Divider my={8} />

          {/* Certifications Section */}
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg" color="gray.800">
              Licenses & Certifications
            </Heading>
            <Accordion
              allowToggle
              index={expandedIndex}
              onChange={setExpandedIndex}
            >
              {certificationItems.map((item, index) => (
                <AccordionItem key={index} border="none">
                  <AccordionButton _expanded={{ bg: "gray.100" }}>
                    <HStack spacing={4} flex="1" textAlign="left">
                      <Text fontWeight="bold" fontSize="md">
                        {item.name}
                      </Text>
                      <Text color="gray.600">{item.issuer}</Text>
                      <Text color="gray.600">{item.date}</Text>
                    </HStack>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List spacing={2}>
                      <ListItem>
                        <Text fontWeight="semibold">Credential ID:</Text>{" "}
                        {item.id}
                      </ListItem>
                      {item.skills && (
                        <ListItem>
                          <Text fontWeight="semibold">Skills:</Text>{" "}
                          {item.skills.map((skill, idx) => (
                            <Tag key={idx} size="sm" colorScheme="blue" ml={1}>
                              {skill}
                            </Tag>
                          ))}
                        </ListItem>
                      )}
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Education;
