import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState(8885559999);

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntryToPhoneBook({firstName, lastName, phone});
  }
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        value={lastName}
        onChange={(event) => setLastName(event.target.value)} 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({phoneBook}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {phoneBook.map(entry => (
          <tr key={entry.id} >
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [phoneBook, setPhonBook] = useState([]);
  const [id, setId] = useState(0);

  const addEntryToPhoneBook = (entry) => {
    setId(id + 1);
    setPhonBook([...phoneBook, { ...entry, id: id + 1}].sort((a, b) => 
    a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
      )
    );
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable phoneBook={phoneBook}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);