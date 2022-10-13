import React from 'react'
import { Col, Row, Form, Container } from 'react-bootstrap';
import moment from 'moment';
import Launch from '../Launch';
import Service from '../../service'
import { useData } from '../../state'

const Launches = () => {
  const API = new Service();
  const [launches, setLaunches] = React.useState([]);
  const [search, setSearch] = React.useState({
    keyword: "",
    date: {
      start: "",
      end: "",
    },
  });

  const { data, setData } = useData();

  React.useEffect(() => {
    const { keyword, date } = search;
    const name = keyword.trim().toLocaleLowerCase();

    const { start, end } = date;

    const filter = launches.filter(launch => launch.name.toLocaleLowerCase().includes(name) && moment(launch.date_utc).isBetween(moment(start), moment(end)));

    if(filter.length === 0) {
      setData([])
    }

    setData(filter)
  }, [search]);

  React.useEffect(() => {
    (async () => {
      await API.Request({
        url: "launches"
      });

      API.onSuccess = (response) => {
        setLaunches(response)
      }
    })()
  }, [])

  return (
    <Container>
      <Row className="mb-5">
        <Col lg="4">
          <Form.Label>Name</Form.Label>
          <Form.Control value={search.keyword} onChange={event => setSearch({
            ...search,
            keyword: event.currentTarget.value
          })} />
        </Col>
        <Col lg="4">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" onChange={event => setSearch({
            ...search,
            date: {
              ...search.date,
              start: event.currentTarget.value
            }
          })} />
        </Col>
        <Col lg="4">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" onChange={event => setSearch({
            ...search,
            date: {
              ...search.date,
              end: event.currentTarget.value
            }
          })} />
        </Col>
      </Row>
      <Row>
        {(data.length > 0 ? data : launches).map((launch) => (
          <Col lg="4" className="mb-5" key={launch.id}>
            <Launch key={launch.id} {...launch} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Launches