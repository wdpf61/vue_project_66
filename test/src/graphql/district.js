import { gql } from '@apollo/client/core'

export const GET_DISTRICTS = gql`
  query {
    districts {
      id
      name
    }
  }
`

export const GET_DISTRICT= gql`
  query Getdistrict($id: ID!) {
    district(id: $id) {
      id
      name
    }
  }
`


export const CREATE_DISTRICT = gql`
  mutation($name: String!) {
    createDistrict(name: $name) {
      id
      name
    }
  }
`

export const UPDATE_DISTRICT = gql`
  mutation($id: ID!, $name: String!) {
    updateDistrict(id: $id, name: $name) {
      id
      name 
    }
  }
`

export const DELETE_DISTRICT = gql`
  mutation($id: ID!) {
    deleteDistrict(id: $id) {
      id
    }
  }
`
