import Link from 'next/link'
const FormAddCar = () => {
    return(
        <>
          <div className="form-car">
                <div className="form-inside w-75">
                    {/* <form> */}
                        <div className="form-group row form-fill">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Nama<span>*</span></label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Placeholder"/>
                        </div>
                        </div>
                        <div className="form-group row form-fill">
                            <label className="col-sm-2 col-form-label col-form-label-sm">Harga<span>*</span></label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Placeholder"/>
                            </div>
                        </div>
                        <div className="form-group row form-fill">
                            <label className="col-sm-2 col-form-label col-form-label-sm">Harga<span>*</span></label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Placeholder"/>
                            </div>
                        </div>
                        <div className="form-group row form-fill">
                            <label className="col-sm-2 col-form-label col-form-label-sm">Foto<span>*</span></label>
                            <div className="col-sm-10">
                                <input type="file" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Placeholder"/>
                                <small id="emailHelp" className="form-text text-muted small-text">File size max. 2MB</small>
                            </div>
                        </div>
                        <div className="form-group row dummy">
                            <label className="col-sm-2 col-form-label col-form-label-sm">Start Rent</label>
                            <div className="col-sm-10">
                            <p>-</p>
                            </div>
                        </div>
                        <div className="form-group row dummy">
                            <label className="col-sm-2 col-form-label col-form-label-sm">Finished Rent</label>
                            <div className="col-sm-10">
                            <p>-</p>
                            </div>
                        </div>
                        <div className="form-group row dummy">
                            <label className="col-sm-2 col-form-label col-form-label-sm">Created at</label>
                            <div className="col-sm-10">
                            <p>-</p>
                            </div>
                        </div>
                        <div className="form-group row dummy">
                            <label className="col-sm-2 col-form-label col-form-label-sm">Updated at</label>
                            <div className="col-sm-10">
                            <p>-</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="btn-save-cancel">
                <Link href="/admin/listCars"><button className="btn btn-cancel my-2 my-sm-0" type="button">Cancel</button></Link>
                <Link href="/admin/listCars"><button className="btn btn-save my-2 my-sm-0" type="button">Save</button></Link>
            </div>
        </>
    )
}
export default FormAddCar;