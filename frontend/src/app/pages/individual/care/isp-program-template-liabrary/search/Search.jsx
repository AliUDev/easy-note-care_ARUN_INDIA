import React from 'react'

function Search() {
  return (
    <div>
       <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-4'>ISP Program Template Liabrary (Search)</h1>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Form ID</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Template Name</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Create Date From</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Create Date To</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Enterd By</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Status</label>
              <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>Draft</option>
                <option value='2'> Deleted</option>
                <option value='3'>Approved</option>
                <option value='3'>Discontinued</option>
              </select>
            </div>
          </div>
          
          <div className='d-flex flex-stack'>
            <div></div>
            <div>
              <button className='btn btn-primary mt-4  '>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search