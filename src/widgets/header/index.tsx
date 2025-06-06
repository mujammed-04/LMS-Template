'use client';

import { useSelector } from "react-redux";
import { RootState } from "@lms/app/store";
import { useTranslations } from "next-intl";

export default function Header() {
    const t = useTranslations();
    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">{t('common.title')}</h1>
            {count}
        </div>
    )
}