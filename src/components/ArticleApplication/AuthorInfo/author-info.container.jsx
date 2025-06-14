"use client"

import { useState } from "react"
import { connect } from "react-redux"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { ChevronDown, Search, X, Loader2 } from "lucide-react"

import { articleApplicationApi } from "../../../api/api"
import {
    setFormData,
    addAuthor,
    removeAuthor,
    saveFormDraft,
    validateStep,
} from "../../../redux/reducers/article-submission-reducer"
import AuthorInfo from "./author-info";



const AuthorInfoContainer = ({
    onNext,
    onPrev,
    setFormData,
    addAuthor,
    removeAuthor,
    saveFormDraft,
    validateStep,
    authorInfo }) => {


    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
    const [showHint, setShowHint] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [searchError, setSearchError] = useState("")
    const [showResults, setShowResults] = useState(false)

    const handleSubmit = (values, { setSubmitting }) => {

        setFormData("authorInfo", {
            ...values,
            authors: authorInfo.authors, // Preserve the authors array
        }),
            saveFormDraft()

        // Validate before proceeding
        if (validateStep(1)) {
            onNext()
        }

        setSubmitting(false)
    }


    const handleSave = (values) => {

        setFormData("authorInfo", {
            ...values,
            authors: authorInfo.authors,
        }),
            saveFormDraft()
    }


const handleAddAuthor = (newAuthor) => {
    addAuthor(newAuthor)
    setIsRegisterModalOpen(false)
}

const handleRemoveAuthor = (index) => {
    if (index === 0) return // Don't remove the primary author
    removeAuthor(index)
}

const handleSearch = async () => {
    if (!searchQuery.trim()) {
        setSearchError("Խնդրում ենք մուտքագրել որոնման տեքստ")
        return
    }

    setIsSearching(true)
    setSearchError("")
    setSearchResults([])

    try {
        // Check if the search query looks like an email
        const isEmail = searchQuery.includes("@")

        let response

        if (isEmail) {
            // Search specifically by email
            response = await articleApplicationApi.searchAuthorByEmail(searchQuery.trim())

        } else {
            // Search by multiple criteria (name, email, ORCID)
            response = await articleApplicationApi.searchAuthors(searchQuery.trim())
        }

        if (response.success) {
            if (response.data) {
                let temp = [...searchResults, response.data]
                setSearchResults(temp)
                setShowResults(true)
            } else {
                setSearchResults([])
                setSearchError("Հեղինակ չի գտնվել այս որոնման համար")
            }
        } else {
            setSearchError(response.message || "Որոնման ժամանակ սխալ է տեղի ունեցել")
        }
    } catch (error) {
        console.error("Search error:", error)
        setSearchError("Կապի խնդիր: Խնդրում ենք կրկին փորձել")
    } finally {
        setIsSearching(false)
    }
}

const handleSelectAuthor = (author) => {
    // Check if author is already added
    const isAlreadyAdded = authorInfo.authors?.some((a) => a.email === author.email)

    if (!isAlreadyAdded) {
        // Format the author data to match your expected structure
        const formattedAuthor = {
            name: author.name || `${author.firstName} ${author.lastName}`,
            email: author.email,
            affiliation: author.affiliation || author.organization || "Չի նշված",
            orcid: author.orcid || "ORCID չի տրամադրվել",
            role: author.role || "Համահեղինակ",
            relatedRole: author.relatedRole || author.position || "Չի նշված",
        }

        addAuthor(formattedAuthor)
        setSearchQuery("")
        setSearchResults([])
        setShowResults(false)
        setSearchError("")
    } else {
        setSearchError("Այս հեղինակն արդեն ավելացված է")
    }
}

const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
    if (showResults) {
        setShowResults(false)
    }
    if (searchError) {
        setSearchError("")
    }
}

const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        handleSearch()
    }
}

return (
    <AuthorInfo
        isRegisterModalOpen={isRegisterModalOpen}
        showHint={showHint}
        setShowHint={setShowHint}
        handleKeyPress={handleKeyPress}
        handleInputChange={handleInputChange}
        isSearching={isSearching}
        handleAddAuthor={handleAddAuthor}
        handleSelectAuthor={handleSelectAuthor}
        handleRemoveAuthor={handleRemoveAuthor}
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        onPrev={onPrev}
        authorInfo={authorInfo}
        searchQuery={searchQuery}
        searchError={searchError}
        showResults={showResults}
        searchResults={searchResults}
        setIsRegisterModalOpen={setIsRegisterModalOpen}
        handleSave={handleSave}
    />
)
}

let mapStateToProps = (state) => ({
    authorInfo: state.articleSubmission.authorInfo
})

export default connect(mapStateToProps, {
    setFormData,
    addAuthor,
    removeAuthor,
    saveFormDraft,
    validateStep,
})(AuthorInfoContainer);
