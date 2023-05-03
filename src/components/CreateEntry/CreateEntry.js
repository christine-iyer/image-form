import {Button, Form, Row, Col} from 'react-bootstrap';



function CreateEntry({
     createEntry,
     entry,
     handleChange
}) {
  return (
     <Form
     style={{ width: '78rem' }}
     onSubmit={(e) => {
         e.preventDefault()
         createEntry()
     }}>

     <h2>Create A Entry</h2>
     <Row>
         <Col>
             <Form.Group controlId='formBasicTitle'>
                 <Form.Label>Title</Form.Label>
                 <Form.Control
                     onChange={handleChange}
                     value={entry.title}
                     name='title'
                     type='text'
                     placeholder='Title'
                 />
             </Form.Group>
         </Col>
         <Col>
             <Form.Group controlId="formBasicSelect">
                 <Form.Label>Select Category</Form.Label>
                 <Form.Control
                     as='select'
                     type='text'
                     name='category'
                     option={entry.category}
                     value={entry.category}
                     onChange={handleChange}>
                     <option value="Work">Work</option>
                     <option value="Family">Family</option>
                     <option value="Code">Code</option>
                     <option value="Friends">Friends</option>
                     <option value="Misc">Misc</option>
                 </Form.Control>
             </Form.Group>
         </Col>
         <Col>
             <Form.Group controlId='formBasicURL'>
                 <Form.Label>Link</Form.Label>

                 <Form.Control
                     onChange={handleChange}
                     value={entry.image}
                     name='image'
                     type='text'
                     placeholder='Enter your Link' />
             </Form.Group>
         </Col>
     </Row>
     <Row>
         <Form.Group className="mb-3">
             <Form.Label>Spill your guts</Form.Label>
             <Form.Control
                 as="textarea"
                 rows={3}
                 onChange={handleChange}
                 value={entry.body}
                 name='body'
                 placeholder='' />
         </Form.Group>
     </Row>
     <Button variant='success' type='submit'>Submit</Button>
 </Form>
  );
}

export default CreateEntry;