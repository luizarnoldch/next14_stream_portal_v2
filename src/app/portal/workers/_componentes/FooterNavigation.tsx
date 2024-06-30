import { Table } from '@tanstack/react-table'
import React from 'react'
import { Worker } from "@/app/types/data";
import { Button } from '@/components/ui/button'

type FooterNavigationProps = {
    table: Table<Worker>
    setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

const FooterNavigation = ({ table, setPageIndex}: FooterNavigationProps) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            setPageIndex(old => Math.max(old - 1, 0))
                        }}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            setPageIndex(old => Math.min(old + 1, table.getPageCount() - 1))
                        }}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
  )
}

export default FooterNavigation