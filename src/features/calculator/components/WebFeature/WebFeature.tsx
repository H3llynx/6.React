import { useRef } from "react";
import InfoSvg from "../../../../assets/icons/info.svg?react";
import type { WebFeatureType } from "../../types";
import { Dialog } from "../Dialog/Dialog";
import "./WebFeature.css";

export function WebFeature({ name, price, remove, add, feature, typeFeature }: WebFeatureType) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <div className="web-feat-container">
            <span className="flex gap-[5px] items-center">
                <button
                    className="info-btn"
                    aria-label={`more information about ${name}s`}
                    onClick={() => dialogRef.current?.showModal()}
                    tabIndex={0}
                >
                    <InfoSvg aria-hidden="true" />
                </button>
                <p className="capitalize">{name}s:</p>
            </span>
            <button
                className="btn-plus-minus"
                aria-label={`Remove ${name}`}
                onClick={remove}
                tabIndex={0}
            >-</button>
            <input type="number" className="web-feat-inputs" min="1" value={feature} onChange={(e) => typeFeature(e)} />
            <button
                className="btn-plus-minus"
                aria-label={`Add ${name}`}
                onClick={add}
                tabIndex={0}
            >+</button>

            <Dialog
                feature={name}
                ref={dialogRef}
                price={price}
                close={() => dialogRef.current?.close()}
            />
        </div>
    )
}