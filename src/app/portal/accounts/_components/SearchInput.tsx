import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import React from 'react'
import { Account } from "@/app/types/data";

type SearchInputProps = {
    table: Table<Account>
}

const SearchInput = ({ table }: SearchInputProps) => {
    return (
        <Input
            placeholder="Filter emails..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
        />
    )
}

export default SearchInput