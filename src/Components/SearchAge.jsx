import React from 'react';

const SearchAge = () => {
    return (
        <div className='container'>
            <form>
                <label className="form-label col-sm-2">Insert Name</label>
                <input
                    type="text" placeholder='Search Age' required
                    class="form-control form-control-sm col-md-12" />
                
                <h2>Optional</h2> 
                
                <label className="form-label col-sm-2">Insert Localization</label>
                <input
                    type="text" placeholder='Search Age'
                    class="form-control form-control-sm col-md-12" />
                <div>
                    <button type={'submit'} className="btn col-sm-6">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default SearchAge;