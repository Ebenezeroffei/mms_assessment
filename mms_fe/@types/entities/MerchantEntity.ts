interface MerchantEntity {
    id: string,
    name: string,
    email: string,
    phone: string,
    business_registration_number: string,
    status: 'Pending' | 'Active' | 'Suspended',
    created_at: Date,
    updated_at: Date,
}