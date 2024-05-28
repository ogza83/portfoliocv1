import React from "react";
import { Box, Heading, SimpleGrid, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Stakeholder management",
    "Agile methodologies",
    "Market research",
    "Strategy development",
    "Product positioning",
    "Team leadership",
    "Market analysis",
    "Data-driven decision making",
    "Budget management",
    "Strategic planning",
    "Python",
    "Generative AI",
    "Scrum",
    "Machine Learning",
    "ChatGPT Prompt Engineering",
    "Sales",
    "Marketing",
    "Entrepreneurship",
    "Business Coaching",
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
        <Box // Card-like container
          maxW="container.md"
          mx="auto"
          p={8}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg="white"
        >
          <Heading as="h1" size="xl" mb={8} color="gray.800">
            Skills
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tag
                  size="md"
                  colorScheme="blue"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {skill}
                </Tag>
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Skills;
