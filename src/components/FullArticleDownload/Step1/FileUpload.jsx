import React from 'react';
import styles from './fileUpload.module.css';
import cloud from "../../assets/cloud_upload.png";
import uploadFile from '../../assets/upload-file.png';
import doc from '../../assets/doc.png';
import cancelUpload from '../../assets/cancel.png';
import recycleBin from '../../assets/recycle-bin.png';

const FileUpload = () => {
    return (
        <div className={styles.container}>
            <div className={styles.uploadSection}>
                {/* File Drop Zone */}
                <div className={styles.dropzone}>
                    <div className={styles.uploadIcon}>
                        <img src={cloud} alt="Cloud Logo" />
                    </div>
                    <p className={styles.mainText}>Ներբեռնել ֆայլերը այստեղ`ընտրել</p>
                    <p className={styles.subText}>Ներբեռնել PDF կամ word առավելագույնը 100 ՄԲ</p>
                </div>

                {/* Uploaded Files Section */}
                <div className={styles.uploadedFiles}>
                    <h3 className={styles.sectionTitle}>Բեռնված ֆայլեր</h3>

                    <div className={styles.fileList}>
                        {/* File Item with Progress */}
                        <div className={styles.fileItem}>
                            <img src={uploadFile} alt="Upload File" className={styles.fileImage}/>
                            <div className={styles.progressContainer}>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressBackground}></div>
                                    <div className={styles.progressFill} style={{ width: '50%' }}></div>
                                </div>
                                <div className={styles.progressInfo}>
                                    <span>50% 2 sec left</span>
                                    <button className={styles.cancelButton} aria-label="Cancel upload">
                                        <img src={cancelUpload} alt="Cancel upload" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Completed File Item */}
                        <div className={styles.fileItem}>
                            <img src={doc} alt="Doc File" />
                            <div className={styles.fileActions}>
                                <button className={styles.deleteButton} aria-label="Delete file">
                                    <img src={recycleBin} alt="Recycle bin" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                    <button className={styles.secondaryButton}>Չեղարկել</button>
                    <button className={styles.primaryButton}>Կցել ֆայլ</button>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;