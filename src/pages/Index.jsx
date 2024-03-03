import React from "react";
import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, SimpleGrid, Icon, Spacer } from "@chakra-ui/react";
import { FaCar, FaTools, FaAward, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="70vh" width="full" align="center" justifyContent="center" backgroundImage="https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MHx8fHwxNzA5NDU5NzQyfDA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center">
        <VStack textAlign="center" color="white" paddingY={10}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Experience the Drive of Your Life
          </Heading>
          <Text fontSize="xl" fontWeight="medium">
            Discover our exclusive collection of luxury cars.
          </Text>
          <Button size="lg" colorScheme="red" mt={6} leftIcon={<FaCar />}>
            View Our Collection
          </Button>
        </VStack>
      </Flex>

      {/* Services Section */}
      <Container maxW="container.xl" pt={10} pb={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {[
            { title: "New Cars", icon: FaCar },
            { title: "Maintenance", icon: FaTools },
            { title: "Awards", icon: FaAward },
            { title: "Community", icon: FaHeart },
          ].map((service, index) => (
            <VStack key={index} spacing={4}>
              <Icon as={service.icon} w={10} h={10} color="red.500" />
              <Text fontWeight="semibold" fontSize="lg">
                {service.title}
              </Text>
              <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Button colorScheme="red" variant="outline">
                Learn More
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* Featured Cars Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" textAlign="center" mb={10}>
            Featured Cars
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Box key={index} textAlign="center" bg="white" borderRadius="md" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1601929862217-f1bf94503333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXJ8ZW58MHx8fHwxNzA5NDU5NzQyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box p={5}>
                  <Text fontWeight="bold" fontSize="xl">
                    Car Model {index + 1}
                  </Text>
                  <Text mt={2} color="gray.600">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                  </Text>
                  <Button colorScheme="red" mt={4}>
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box bg="gray.800" color="white">
        <Container maxW="container.xl" py={10}>
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="flex-start">
              <Heading as="h5" size="md">
                Car Brand
              </Heading>
              <Text>© {new Date().getFullYear()} All rights reserved.</Text>
            </VStack>
            <Spacer />
            <HStack spacing={5}>
              <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaCar />}>
                Models
              </Button>
              <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaTools />}>
                Services
              </Button>
              <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaAward />}>
                Awards
              </Button>
              <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaHeart />}>
                Community
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
