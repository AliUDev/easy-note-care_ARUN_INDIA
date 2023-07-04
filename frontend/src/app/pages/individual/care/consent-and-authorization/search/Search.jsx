import React from 'react'

function Search() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-4'>Individual Search</h1>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Individual</label>
                            <input
                                type='text'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Consent Status</label>
                            <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Open this select menu</option>
                                <option value='1'>Active (Consent has Been Granted)</option>
                                <option value='2'>Bypassed (Consent not sought)</option>
                                <option value='3'>Limited (Consent has Been granted with limitation)</option>
                                <option value='4'>Pending (Consent has not yet been Sought)</option>
                                <option value='5'>Refused (Consent has Beed refused)</option>
                                <option value='6'>Rescinded (Consent was initially granted, but was subsequently revoked or ended)</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Record Status</label>
                            <select class='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Open this select menu</option>
                                <option value='1'>Active</option>
                                <option value='2'>Deleted</option>
                            </select>
                        </div>



                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
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
                            <label className=' fw-bold fs-6 mb-2'>Effective Date From</label>
                            <input
                                type='date'
                                name='user_name'
                                class='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Admission Date To</label>
                            <input
                                type='date'
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

export default Search