import React from 'react'

function Search() {
  return (
    <div>
       <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-4'>GER (Search)</h1>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>GER Search</label>
              <input
                type='text'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Individual</label>
              <input
                type='text'
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
              <label className=' fw-bold fs-6 mb-2'>Event Date From</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Event Date To</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Entered Date From</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Entered Date To</label>
              <input
                type='date'
                name='user_name'
                class='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Notification Level</label>
              <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Event Type</label>
              <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>Medication Error</option>
                <option value='2'>
                  Restraint Related to Behavior/Emergency Safety Intervention
                </option>
                <option value='3'>Restraint Other</option>
                <option value='3'>Injury</option>
                <option value='3'>Death</option>
                <option value='3'>Other</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Status</label>
              <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>In Prep</option>
                <option value='2'>Pending Approval</option>
                <option value='3'>Approved</option>
                <option value='3'>Returned</option>
              </select>
            </div>

            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Show</label>
              <div class='form-check mt-2 mb-4'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                  checked
                />
                <label class='form-check-label' for='exampleRadios1'>
                  addressed GERs
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios2'
                  value='option2'
                />
                <label class='form-check-label' for='exampleRadios2'>
                  unaddressed GERs
                </label>
              </div>
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