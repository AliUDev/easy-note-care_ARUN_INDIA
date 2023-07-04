import React from 'react'

function Summary() {
  return (
    <div>
       <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Program Site</label>
                            <input
                                type='search'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Description Code</label>
                            <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select</option>
                                <option value='1'>Supported Employement</option>
                                <option value='1'>Transportation</option>
                                
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Attendance Type</label>
                            <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select</option>
                                <option value='1'>Supported Employement</option>
                                <option value='1'>Transportation</option>
                                
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Start Date</label>
                            <input
                                type='date'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>End Date</label>
                            <input
                                type='date'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'> Attendence Data Form ID</label>
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
                                <option selected>Select</option>
                                <option value='1'>Approved</option>
                                <option value='1'>Incomplete</option>
                                <option value='1'>Submited For Billing</option>
                                
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Individual</label>
                            <input
                                type='search'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Authorized ID</label>
                            <input
                                type='text'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Services Authorized Status</label>
                            <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select</option>
                                <option value='1'>Approved</option>
                                <option value='1'>Discontinued</option>
                                <option value='1'>Deleted</option>
                                
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Entered By</label>
                            <input
                                type='search'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
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

export default Summary