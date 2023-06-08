import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <>
      <Center>
        <Box borderRadius={'12'} boxSize={'xl'} m={'15'} p={'15'} bg={'red.500'}>
          <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
          >
            <GridItem pl='2' bg='orange.300' area={'header'}>
              <Text>
                Portifólio
              </Text>
            </GridItem>
            <GridItem borderRadius={'12'} pl='2' bg='pink.300' area={'nav'}>
              Imagem
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
              Informações gerais
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'footer'}>
              Redes sociais
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </>
  )
}