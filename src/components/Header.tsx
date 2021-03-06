import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine, RiUserSearchLine } from 'react-icons/ri';

export function Header() {
  return (
    <Flex as="header" w="100%" h="20" maxWidth={1488} mt="4" mx="auto" px="6" align="center">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
         dashgo 
         <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>
     
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        align="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />

       <Icon as={RiUserSearchLine} /> 
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack 
          mx="8"
          pr="8"
          spacing="4"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text> Diego Fernandes </Text>
            <Text color="gray.300">
              diego.schell.f@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Diego Fernandes" src="http://github.com/diego3g.png" />

        </Flex>

      </Flex>
    </Flex>
  );
}