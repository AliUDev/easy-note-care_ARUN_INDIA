import React from 'react'

function Search() {
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-4'>ISP Program Search</h1>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Program (Site)</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Search'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Individual</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Social Security Number'
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Entered By</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Medicaid Number'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>ISP Program Author</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Medicare Number'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Form ID</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>ISP Program Name</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Start Date From</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Start Date To</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>End Date from</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>End Date TO</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Status</label>
              <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>In Prep</option>
                <option value='2'>Pending Approval</option>
                <option value='3'>Approved</option>
                <option value='4'>Deleted</option>
                <option value='5'>Discontinued</option>
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