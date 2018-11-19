import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CricketerNameList = props => {
  let listItem = props.allCricketerData.map(cricketer => (
        <ListGroupItem key={cricketer.name} onClick={e => props.onCricketerNameSelect(e, cricketer)}>
          {cricketer.name}
        </ListGroupItem>
  ))
  return (
    <Row>
      <Col xs={12} md={9} className='calc'>
        <Link to='/Dashboard/palyer' action="REPLACE">
        <ListGroup>
          {listItem}
        </ListGroup>
        </Link>
      </Col>
    </Row>

  )
}

export default CricketerNameList
