'use client';

import { useSelector } from "react-redux";
import { RootState } from "@lms/app/store";

export default function Header() {
    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Header</h1>
            {count}
        </div>
    )
}