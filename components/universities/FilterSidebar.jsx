import CallToActions from "../employers-listing-pages/components/CallToActions";
import Categories from "../employers-listing-pages/components/Categories";
import DestinationRangeSlider from "../employers-listing-pages/components/DestinationRangeSlider";
import CompanySize from "../employers-listing-pages/components/CompanySize";
import LocationBox from "../employers-listing-pages/components/LocationBox";
import FoundationDate from "../employers-listing-pages/components/FoundationDate";
import SearchBox from "../employers-listing-pages/components/SearchBox";

const FilterSidebar = () => {
    return (
        <div className="inner-column pd-right">
            <div className="filters-outer">
                <button
                    type="button"
                    className="btn-close text-reset close-filters show-1023"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                {/* End .close filter */}

                <div className="filter-block">
                    <h4>Search by Keywords</h4>
                    <div className="form-group">
                        <SearchBox />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Location</h4>
                    <div className="form-group">
                        <LocationBox />
                    </div>

                    <p>Radius around selected destination</p>
                    <DestinationRangeSlider />
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Category</h4>
                    <div className="form-group">
                        <Categories />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                {/* <div className="filter-block">
                    <h4>Compnay Size</h4>
                    <div className="form-group">
                        <CompanySize />
                    </div>
                </div> */}
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Foundation Date</h4>

                    <FoundationDate />
                </div>
                {/* <!-- Filter Block --> */}
            </div>
            {/* Filter Outer */}

            <CallToActions />
            {/* <!-- End Call To Action --> */}
        </div>
    );
};

export default FilterSidebar;
