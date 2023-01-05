import styled from '@emotion/styled'
import React from 'react'
import { categories1data } from '../data'
import { mobile } from "../responsive";
import CategoriesItem1 from './CategoriesItem1'
const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`






const Categories1 = () => {
  return (
    <Container>
        {categories1data.map(item=>(
<CategoriesItem1 item={item} key={item.id} />
))}
    </Container>
  )
}

export default Categories1