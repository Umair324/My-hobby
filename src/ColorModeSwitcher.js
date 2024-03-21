import React from 'react';
import { ChakraProvider, useColorMode, IconButton, Flex } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="flex-end" pos="fixed" top={2} right={4}>
      <IconButton
        zIndex={"overlay"}
        icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        color="current"
        variant="ghost"

        aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
      />
    </Flex>
  );
}

function App() {
  return (
    <ChakraProvider>
      <div>
        <ColorModeSwitcher />
      </div>
    </ChakraProvider>
  );
}

export default App;
