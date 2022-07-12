
export const goToHomePage = (navigate) =>{
    navigate("/")
}

export const goToLoginPage = (navigate)=>{
    navigate("/login")
}

export const goToAdminHomePag = (navigate)=>{
    navigate("/admin/trips/list")
}

export const goToTripDetailsPage = (navigate)=>{
    navigate("/admin/trips/:id")
}

export const goToListTripsPage = (navigate)=>{
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate)=>{
    navigate("/trips/application")
}


export const goBack = (navigate) =>{
    navigate(-1)
}