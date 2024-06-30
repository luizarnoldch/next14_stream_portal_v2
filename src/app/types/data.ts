export type Worker = {
    id: string;
    name: string;
    phone: string;
    email: string;
    status: "active" | "inactive" | "on_leave" | "terminated";
    created_at: string;
    last_edit: string;
    last_activity: string;
}

export type Account = {
    id: string;
    name: string;
    email: string;
    type: string
    current_users: string;
    max_users: string;
    status: "active" | "about_to_end" | "terminated";
    created_at: string;
    updated_at: string;
    expires_at: string;
}

export type Customer = {
    id: string;
    account_id: string;
    name: string;
    phone: string;
    email: string;
    code: string;
    status: "active" | "about_to_end" | "terminated";
    created_at: string;
    expires_at: string;
}