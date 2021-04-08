import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [file, setFile] = useState()

  const changeFile = e => {
      if (!e.target.files) return
      setFile(e.target.files[0])
  }

  useEffect(() => {
      if (!file) return
      let formData = new FormData()
      formData.append('excelFile', file, 'file.xlsx')
      
      axios.post('http://localhost:5000/api/ms-user/v1/user/mass-registration', formData)
      .then(data => data.data)
      .then(data => console.log(data))
  }, [file])

  return (
        <div>
            <input type="file" onChange={changeFile} />
        </div>
    )
}

export default App
