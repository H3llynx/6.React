import { useRef } from "react";
import InfoSvg from "../../../../assets/icons/info.svg?react";
import type { WebFeatureType } from "../../types";
import { Dialog } from "../Dialog/Dialog";
import "./WebFeature.css";

export function WebFeature({ name, remove, add, feature, addFeature }: WebFeatureType) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <div className="web-feat-container">
            <span className="flex gap-[5px] items-center">
                <button
                    className="info-btn"
                    aria-label={`more information about ${name}`}
                    onClick={() => dialogRef.current?.showModal()}>
                    <InfoSvg aria-hidden="true" className="w-[19px]" />
                </button>
                <p className="capitalize">{name}s:</p>
            </span>
            <button
                className="btn-plus-minus"
                aria-label="Remove page"
                onClick={remove}>-</button>
            <input type="number" className="web-feat-inputs" min="1" value={feature} onChange={(e) => addFeature(e)} />
            <button
                className="btn-plus-minus"
                aria-label="Add page"
                onClick={add}
            >+</button>

            <Dialog
                feature={name}
                ref={dialogRef}
                close={() => dialogRef.current?.close()}
            />
        </div>
    )
}