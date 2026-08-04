import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, i as useQuery, o as useQueryClient, s as require_jsx_runtime, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-F0vtjePk.mjs";
import { a as objectType, n as booleanType, o as stringType, r as enumType, t as arrayType } from "../_libs/zod.mjs";
import { a as upsertGalleryImage, n as deleteGalleryImage, o as useServerFn, r as listAdminGallery, t as createSsrRpc } from "./gallery.functions-B1LoZhyg.mjs";
import { t as supabase } from "./client-Bx01nVAt.mjs";
import { t as dubai_apartment_jpg_asset_default } from "./dubai-apartment.jpg.asset-gIOVSZZQ.mjs";
import { t as bnl_logo_asset_default } from "./bnl-logo.asset-CplchhA0.mjs";
import { n as usePropertyImageSrc } from "./property-image-CPGMeRam.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as createServerFn } from "./server-BRsgnlxe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Lb-Fyrze.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var propertyInput = objectType({
	id: stringType().uuid().optional().nullable(),
	category: enumType([
		"dubai-apartments",
		"dubai-villas",
		"dubai-commercial",
		"india-commercial",
		"india-residential",
		"india-land"
	]),
	title: stringType().trim().min(1).max(200),
	location: stringType().trim().max(200).optional().nullable(),
	price: stringType().trim().max(80).optional().nullable(),
	bedrooms: stringType().trim().max(60).optional().nullable(),
	area: stringType().trim().max(60).optional().nullable(),
	description: stringType().trim().max(2e3).optional().nullable(),
	full_description: stringType().trim().max(5e3).optional().nullable(),
	image_url: stringType().trim().max(500).optional().nullable(),
	image_path: stringType().trim().max(500).optional().nullable(),
	gallery: arrayType(stringType().trim().max(500)).max(12).optional().default([]),
	highlights: arrayType(stringType().trim().max(140)).max(12).optional().default([]),
	featured: booleanType(),
	published: booleanType()
});
var listAdminProperties = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("c706c02de4b9ac647ff5702a13040fd7e6e5cf04adc040131333cd3bef0bbc84"));
var upsertProperty = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => propertyInput.parse(raw)).handler(createSsrRpc("0dbfff667478277cf1ea80217e1fd15b826ac57e627ccec11b1ad120656580d9"));
var deleteProperty = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({ id: stringType().uuid() }).parse(raw)).handler(createSsrRpc("aa2c26a83fd863d1d75d08347b56bc0b43f0e133c7a18007a940ac08139453a1"));
var careerInput = objectType({
	id: stringType().uuid().optional().nullable(),
	title: stringType().trim().min(1).max(200),
	department: stringType().trim().max(100).optional().nullable(),
	location: stringType().trim().max(100).optional().nullable(),
	type: stringType().trim().max(60).optional().nullable(),
	description: stringType().trim().max(3e3).optional().nullable(),
	requirements: arrayType(stringType().trim().max(500)).max(20).optional().default([]),
	published: booleanType().optional().default(true)
});
var listCareersAdmin = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("a21fcbc230f9790d55556c8a1eb726090d8599d76f0dee447c065a77558662bb"));
var upsertCareer = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => careerInput.parse(raw)).handler(createSsrRpc("2aea7d78267cd5052846b2db5649a19299ecbb5bf4a23dab88f025161a24fc4d"));
var deleteCareer = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({ id: stringType().uuid() }).parse(raw)).handler(createSsrRpc("1c5ea22a1b719e031967c330ba1fdc096f5bbc66a099bb0f7a56201da8d42fbe"));
var listApplications = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("49e4b7dcacfd5df53c240b47a547c39745b57bc8e8824fff9ffe8923e9f0594e"));
var updateApplicationStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((raw) => objectType({
	id: stringType().uuid(),
	status: enumType([
		"new",
		"reviewing",
		"shortlisted",
		"rejected",
		"hired"
	])
}).parse(raw)).handler(createSsrRpc("c82552885b116d510226b1e160577bfa0ab7a2643cb07f404bbaec0b190d4be7"));
var CATEGORIES = [
	{
		value: "dubai-apartments",
		label: "Dubai · Luxury Apartments"
	},
	{
		value: "dubai-villas",
		label: "Dubai · Luxury Villas"
	},
	{
		value: "dubai-commercial",
		label: "Dubai · Commercial"
	},
	{
		value: "india-commercial",
		label: "India · Commercial"
	},
	{
		value: "india-residential",
		label: "India · Residential"
	},
	{
		value: "india-land",
		label: "India · Land Investment"
	}
];
var emptyForm = {
	id: null,
	category: "dubai-apartments",
	title: "",
	location: "",
	price: "",
	bedrooms: "",
	area: "",
	description: "",
	full_description: "",
	image_url: "",
	image_path: "",
	gallery: [],
	highlights: [],
	featured: false,
	published: true
};
var emptyCareerForm = {
	id: null,
	title: "",
	department: "",
	location: "",
	type: "",
	description: "",
	requirements: [],
	published: true
};
function AdminPage() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const listFn = useServerFn(listAdminProperties);
	const upsertFn = useServerFn(upsertProperty);
	const deleteFn = useServerFn(deleteProperty);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [editing, setEditing] = (0, import_react.useState)(null);
	const query = useQuery({
		queryKey: ["admin-properties"],
		queryFn: () => listFn()
	});
	const upsert = useMutation({
		mutationFn: (data) => upsertFn({ data: {
			id: data.id,
			category: data.category,
			title: data.title,
			location: data.location,
			price: data.price,
			bedrooms: data.bedrooms,
			area: data.area,
			description: data.description,
			full_description: data.full_description,
			image_url: data.image_url,
			image_path: data.image_path,
			gallery: data.gallery,
			highlights: data.highlights,
			featured: data.featured,
			published: data.published
		} }),
		onSuccess: () => {
			toast.success("Listing saved.");
			setEditing(null);
			qc.invalidateQueries({ queryKey: ["admin-properties"] });
			qc.invalidateQueries({ queryKey: ["properties"] });
		},
		onError: (err) => toast.error(err.message ?? "Could not save listing.")
	});
	const remove = useMutation({
		mutationFn: (id) => deleteFn({ data: { id } }),
		onSuccess: () => {
			toast.success("Listing removed.");
			qc.invalidateQueries({ queryKey: ["admin-properties"] });
			qc.invalidateQueries({ queryKey: ["properties"] });
		},
		onError: (err) => toast.error(err.message ?? "Could not delete listing.")
	});
	const [tab, setTab] = (0, import_react.useState)("listings");
	const [careerSubTab, setCareerSubTab] = (0, import_react.useState)("openings");
	const [careerEditing, setCareerEditing] = (0, import_react.useState)(null);
	const listCareersFn = useServerFn(listCareersAdmin);
	const upsertCareerFn = useServerFn(upsertCareer);
	const deleteCareerFn = useServerFn(deleteCareer);
	const listApplicationsFn = useServerFn(listApplications);
	const updateStatusFn = useServerFn(updateApplicationStatus);
	const careersQuery = useQuery({
		queryKey: ["admin-careers"],
		queryFn: () => listCareersFn(),
		enabled: tab === "careers"
	});
	const applicationsQuery = useQuery({
		queryKey: ["admin-applications"],
		queryFn: () => listApplicationsFn(),
		enabled: tab === "careers" && careerSubTab === "applications"
	});
	const upsertCareerMutation = useMutation({
		mutationFn: (data) => upsertCareerFn({ data: {
			id: data.id,
			title: data.title,
			department: data.department,
			location: data.location,
			type: data.type,
			description: data.description,
			requirements: data.requirements,
			published: data.published
		} }),
		onSuccess: () => {
			toast.success("Opening saved.");
			setCareerEditing(null);
			qc.invalidateQueries({ queryKey: ["admin-careers"] });
			qc.invalidateQueries({ queryKey: ["careers"] });
		},
		onError: (err) => toast.error(err.message ?? "Could not save opening.")
	});
	const deleteCareerMutation = useMutation({
		mutationFn: (id) => deleteCareerFn({ data: { id } }),
		onSuccess: () => {
			toast.success("Opening removed.");
			qc.invalidateQueries({ queryKey: ["admin-careers"] });
			qc.invalidateQueries({ queryKey: ["careers"] });
		},
		onError: (err) => toast.error(err.message ?? "Could not delete opening.")
	});
	const updateStatusMutation = useMutation({
		mutationFn: ({ id, status }) => updateStatusFn({ data: {
			id,
			status
		} }),
		onSuccess: () => {
			toast.success("Status updated.");
			qc.invalidateQueries({ queryKey: ["admin-applications"] });
		},
		onError: (err) => toast.error(err.message ?? "Could not update status.")
	});
	const handleSignOut = async () => {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	};
	const filtered = (0, import_react.useMemo)(() => {
		const items = query.data ?? [];
		return filter === "all" ? items : items.filter((p) => p.category === filter);
	}, [query.data, filter]);
	const grouped = (0, import_react.useMemo)(() => {
		const groups = {};
		(query.data ?? []).forEach((p) => {
			groups[p.category] = (groups[p.category] ?? 0) + 1;
		});
		return groups;
	}, [query.data]);
	const isForbidden = query.error && /forbidden/i.test(query.error.message);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-secondary/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: bnl_logo_asset_default.url,
							alt: "Bricks & Legacy",
							className: "h-10 w-10 rounded-sm object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-base text-background",
								children: "Bricks & Legacy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] tracking-[0.28em] uppercase text-background/70",
								children: "Admin"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-[11px] tracking-[0.24em] uppercase text-background/70 hover:text-accent",
							children: "View site"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSignOut,
							className: "rounded-sm border border-background/30 px-4 py-2 text-[11px] tracking-[0.24em] uppercase text-background hover:bg-accent hover:border-accent hover:text-primary transition",
							children: "Sign Out"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-10 lg:px-10",
				children: isForbidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm bg-card p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl",
							children: "Not authorised"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "This account doesn't have admin access. Sign in with the admin email."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSignOut,
							className: "mt-6 inline-flex rounded-sm bg-primary px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase text-primary-foreground hover:bg-primary/90",
							children: "Sign Out"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 border-b border-muted-foreground/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
								active: tab === "listings",
								onClick: () => setTab("listings"),
								label: "Property Listings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
								active: tab === "careers",
								onClick: () => setTab("careers"),
								label: "Careers & Applications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
								active: tab === "gallery",
								onClick: () => setTab("gallery"),
								label: "Gallery"
							})
						]
					})
				}), tab === "listings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingsPanel, {
					query,
					filter,
					setFilter,
					grouped,
					filtered,
					onAdd: () => setEditing({ ...emptyForm }),
					onEdit: (p) => setEditing(propertyToForm(p)),
					onDelete: (p) => {
						if (confirm(`Delete "${p.title}"? This cannot be undone.`)) remove.mutate(p.id);
					}
				}) : tab === "careers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareersPanel, {
					careersQuery,
					applicationsQuery,
					subTab: careerSubTab,
					setSubTab: setCareerSubTab,
					onAddCareer: () => setCareerEditing({ ...emptyCareerForm }),
					onEditCareer: (c) => setCareerEditing(careerToForm(c)),
					onDeleteCareer: (id) => {
						if (confirm("Delete this opening? This cannot be undone.")) deleteCareerMutation.mutate(id);
					},
					onUpdateStatus: (id, status) => updateStatusMutation.mutate({
						id,
						status
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPanel, { enabled: tab === "gallery" })] })
			}),
			editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditDialog, {
				form: editing,
				onChange: setEditing,
				onClose: () => setEditing(null),
				onSave: () => upsert.mutate(editing),
				saving: upsert.isPending
			}),
			careerEditing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerEditDialog, {
				form: careerEditing,
				onChange: setCareerEditing,
				onClose: () => setCareerEditing(null),
				onSave: () => upsertCareerMutation.mutate(careerEditing),
				saving: upsertCareerMutation.isPending
			})
		]
	});
}
function FilterChip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `rounded-sm border px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/20 bg-card text-foreground hover:border-primary"}`,
		children: label
	});
}
function PropertyRow({ property, onEdit, onDelete }) {
	const src = usePropertyImageSrc(property.image_path, property.image_url, dubai_apartment_jpg_asset_default.url);
	const category = CATEGORIES.find((c) => c.value === property.category)?.label ?? property.category;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 rounded-sm bg-card p-4 sm:flex-row sm:items-center shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: property.title,
				className: "h-20 w-28 shrink-0 rounded-sm object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg text-foreground truncate",
								children: property.title
							}),
							property.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm bg-accent px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase text-primary",
								children: "Featured"
							}),
							!property.published && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm border border-muted-foreground/30 px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase text-muted-foreground",
								children: "Draft"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-[0.18em] uppercase text-muted-foreground",
						children: category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground truncate",
						children: [property.location, property.price].filter(Boolean).join(" · ") || "—"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onEdit,
					className: "rounded-sm border border-primary/30 px-4 py-2 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition",
					children: "Edit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onDelete,
					className: "rounded-sm border border-destructive/40 px-4 py-2 text-[10px] tracking-[0.24em] uppercase text-destructive hover:bg-destructive hover:text-destructive-foreground transition",
					children: "Delete"
				})]
			})
		]
	});
}
function propertyToForm(p) {
	return {
		id: p.id,
		category: p.category,
		title: p.title,
		location: p.location ?? "",
		price: p.price ?? "",
		bedrooms: p.bedrooms ?? "",
		area: p.area ?? "",
		description: p.description ?? "",
		full_description: p.full_description ?? "",
		image_url: p.image_url ?? "",
		image_path: p.image_path ?? "",
		gallery: p.gallery ?? [],
		highlights: p.highlights ?? [],
		featured: p.featured,
		published: p.published
	};
}
function EditDialog({ form, onChange, onClose, onSave, saving }) {
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const previewSrc = usePropertyImageSrc(form.image_path, form.image_url, "");
	const set = (k, v) => onChange({
		...form,
		[k]: v
	});
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	const uploadFile = async (file) => {
		if (file.size > 10485760) {
			toast.error("Image must be under 10MB.");
			return;
		}
		setUploading(true);
		try {
			const ext = file.name.split(".").pop() || "jpg";
			const path = `properties/${crypto.randomUUID()}.${ext}`;
			const { error } = await supabase.storage.from("property-images").upload(path, file, {
				contentType: file.type,
				upsert: false
			});
			if (error) throw error;
			if (form.image_path && form.image_path !== path) await supabase.storage.from("property-images").remove([form.image_path]);
			onChange({
				...form,
				image_path: path
			});
			toast.success("Image uploaded.");
		} catch (err) {
			toast.error(err.message ?? "Upload failed.");
		} finally {
			setUploading(false);
		}
	};
	const removeImage = async () => {
		if (form.image_path) await supabase.storage.from("property-images").remove([form.image_path]);
		onChange({
			...form,
			image_path: ""
		});
	};
	const uploadGalleryFile = async (file) => {
		if (form.gallery.length >= 12) {
			toast.error("Max 12 gallery photos.");
			return;
		}
		if (file.size > 10485760) {
			toast.error("Image must be under 10MB.");
			return;
		}
		setUploading(true);
		try {
			const ext = file.name.split(".").pop() || "jpg";
			const path = `properties/${crypto.randomUUID()}.${ext}`;
			const { error } = await supabase.storage.from("property-images").upload(path, file, {
				contentType: file.type,
				upsert: false
			});
			if (error) throw error;
			onChange({
				...form,
				gallery: [...form.gallery, path]
			});
		} catch (err) {
			toast.error(err.message ?? "Upload failed.");
		} finally {
			setUploading(false);
		}
	};
	const removeGalleryItem = async (path) => {
		await supabase.storage.from("property-images").remove([path]);
		onChange({
			...form,
			gallery: form.gallery.filter((p) => p !== path)
		});
	};
	const labelCls = "text-[10px] tracking-[0.24em] uppercase text-muted-foreground";
	const inputCls = "mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-8 w-full max-w-3xl rounded-sm bg-card shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-muted-foreground/10 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl",
						children: form.id ? "Edit Listing" : "New Listing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "text-muted-foreground hover:text-foreground text-xl leading-none",
						"aria-label": "Close",
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 p-6 lg:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.category,
								onChange: (e) => set("category", e.target.value),
								className: inputCls,
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.value,
									children: c.label
								}, c.value))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								children: "Title *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.title,
								onChange: (e) => set("title", e.target.value),
								className: inputCls,
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							children: "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.location,
							onChange: (e) => set("location", e.target.value),
							className: inputCls,
							placeholder: "Dubai Marina"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							children: "Price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.price,
							onChange: (e) => set("price", e.target.value),
							className: inputCls,
							placeholder: "AED 2.4M"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							children: "Bedrooms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.bedrooms,
							onChange: (e) => set("bedrooms", e.target.value),
							className: inputCls,
							placeholder: "3 BR"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							children: "Area"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.area,
							onChange: (e) => set("area", e.target.value),
							className: inputCls,
							placeholder: "1,780 sqft"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								children: "Short description (card preview)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 2,
								value: form.description,
								onChange: (e) => set("description", e.target.value),
								className: `${inputCls} resize-none`,
								placeholder: "One or two lines shown on listing cards."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								children: "Full description (detail page)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 5,
								value: form.full_description,
								onChange: (e) => set("full_description", e.target.value),
								className: `${inputCls} resize-none`,
								placeholder: "Long-form description shown on the property detail page. Blank lines create paragraphs."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: labelCls,
								children: "Key highlights (one per line)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								value: form.highlights.join("\n"),
								onChange: (e) => set("highlights", e.target.value.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 12)),
								className: `${inputCls} resize-none`,
								placeholder: "Private pool\nSea view\nSmart-home ready"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelCls,
									children: "Photo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-4",
									children: [previewSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: previewSrc,
										alt: "Preview",
										className: "h-24 w-32 rounded-sm object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-24 w-32 rounded-sm border border-dashed border-muted-foreground/30 flex items-center justify-center text-xs text-muted-foreground",
										children: "No image"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: fileRef,
												type: "file",
												accept: "image/*",
												onChange: (e) => {
													const f = e.target.files?.[0];
													if (f) uploadFile(f);
													if (fileRef.current) fileRef.current.value = "";
												},
												className: "hidden"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => fileRef.current?.click(),
												disabled: uploading,
												className: "rounded-sm border border-primary/30 px-4 py-2 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition disabled:opacity-60",
												children: uploading ? "Uploading…" : form.image_path ? "Replace" : "Upload Photo"
											}),
											form.image_path && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: removeImage,
												className: "text-[10px] tracking-[0.24em] uppercase text-destructive hover:underline",
												children: "Remove uploaded photo"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: "Max 10MB. JPG or PNG recommended."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: `${labelCls} mt-4 block`,
									children: "Or external image URL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.image_url,
									onChange: (e) => set("image_url", e.target.value),
									className: inputCls,
									placeholder: "https://…"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: labelCls,
									children: [
										"Additional gallery photos (",
										form.gallery.length,
										"/12)"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3",
									children: [form.gallery.map((path) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryThumb, {
										path,
										onRemove: () => removeGalleryItem(path)
									}, path)), form.gallery.length < 12 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex h-24 cursor-pointer items-center justify-center rounded-sm border border-dashed border-muted-foreground/30 text-xs text-muted-foreground hover:border-accent hover:text-accent",
										children: [uploading ? "Uploading…" : "+ Add photo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "image/*",
											className: "hidden",
											disabled: uploading,
											onChange: (e) => {
												const f = e.target.files?.[0];
												if (f) uploadGalleryFile(f);
												e.currentTarget.value = "";
											}
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: "Extra photos shown on the property detail page (up to 6)."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6 lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.published,
									onChange: (e) => set("published", e.target.checked)
								}), "Published (visible on site)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.featured,
									onChange: (e) => set("featured", e.target.checked)
								}), "Featured"]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-3 border-t border-muted-foreground/10 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-sm border border-muted-foreground/30 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase hover:bg-muted transition",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onSave,
						disabled: saving || !form.title.trim(),
						className: "rounded-sm bg-accent px-6 py-2.5 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 disabled:opacity-60",
						children: saving ? "Saving…" : "Save Listing"
					})]
				})
			]
		})
	});
}
function GalleryThumb({ path, onRemove }) {
	const src = usePropertyImageSrc(path, null, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative h-24 overflow-hidden rounded-sm border border-muted-foreground/10 bg-muted",
		children: [src && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			className: "h-full w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onRemove,
			className: "absolute right-1 top-1 rounded-sm bg-black/70 px-2 py-0.5 text-[10px] tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 hover:bg-destructive",
			children: "Remove"
		})]
	});
}
function TabButton({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `px-4 py-3 text-[11px] tracking-[0.24em] uppercase transition border-b-2 ${active ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
		children: label
	});
}
function ListingsPanel({ query, filter, setFilter, grouped, filtered, onAdd, onEdit, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl lg:text-4xl",
				children: "Property Listings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Add, edit, publish or remove listings across every category."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onAdd,
				className: "rounded-sm bg-accent px-6 py-3 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90",
				children: "+ Add Listing"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: filter === "all",
				onClick: () => setFilter("all"),
				label: `All (${query.data?.length ?? 0})`
			}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: filter === c.value,
				onClick: () => setFilter(c.value),
				label: `${c.label} (${grouped[c.value] ?? 0})`
			}, c.value))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-3",
			children: [
				query.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-sm bg-card p-8 text-center text-sm text-muted-foreground",
					children: "Loading listings…"
				}),
				!query.isLoading && filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-sm bg-card p-8 text-center text-sm text-muted-foreground",
					children: "No listings in this category yet."
				}),
				filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyRow, {
					property: p,
					onEdit: () => onEdit(p),
					onDelete: () => onDelete(p)
				}, p.id))
			]
		})
	] });
}
function CareersPanel({ careersQuery, applicationsQuery, subTab, setSubTab, onAddCareer, onEditCareer, onDeleteCareer, onUpdateStatus }) {
	const careers = careersQuery.data ?? [];
	const applications = applicationsQuery.data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl lg:text-4xl",
				children: "Careers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Post openings and manage incoming applications."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: subTab === "openings",
					onClick: () => setSubTab("openings"),
					label: `Openings (${careers.length})`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: subTab === "applications",
					onClick: () => setSubTab("applications"),
					label: `Applications (${applications.length})`
				})]
			})]
		}),
		subTab === "openings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onAddCareer,
						className: "rounded-sm bg-accent px-6 py-3 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90",
						children: "+ Add Opening"
					})
				}),
				careersQuery.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-sm bg-card p-8 text-center text-sm text-muted-foreground",
					children: "Loading openings…"
				}),
				!careersQuery.isLoading && careers.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-sm bg-card p-8 text-center text-sm text-muted-foreground",
					children: "No openings yet. Add one to start receiving applications."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: careers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerRow, {
						career: c,
						onEdit: () => onEditCareer(c),
						onDelete: () => onDeleteCareer(c.id)
					}, c.id))
				})
			]
		}),
		subTab === "applications" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-3",
			children: [
				applicationsQuery.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-sm bg-card p-8 text-center text-sm text-muted-foreground",
					children: "Loading applications…"
				}),
				!applicationsQuery.isLoading && applications.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-sm bg-card p-8 text-center text-sm text-muted-foreground",
					children: "No applications yet."
				}),
				applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicationRow, {
					application: a,
					onUpdateStatus
				}, a.id))
			]
		})
	] });
}
function CareerRow({ career, onEdit, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 rounded-sm bg-card p-4 sm:flex-row sm:items-center shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg text-foreground",
					children: career.title
				}), !career.published && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-sm border border-muted-foreground/30 px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase text-muted-foreground",
					children: "Draft"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs tracking-[0.18em] uppercase text-muted-foreground",
				children: [
					career.department,
					career.location,
					career.type
				].filter(Boolean).join(" · ")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onEdit,
				className: "rounded-sm border border-primary/30 px-4 py-2 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition",
				children: "Edit"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onDelete,
				className: "rounded-sm border border-destructive/40 px-4 py-2 text-[10px] tracking-[0.24em] uppercase text-destructive hover:bg-destructive hover:text-destructive-foreground transition",
				children: "Delete"
			})]
		})]
	});
}
function ApplicationRow({ application, onUpdateStatus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-sm bg-card p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg text-foreground",
							children: application.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-sm px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase ${statusBadge(application.status)}`,
							children: application.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [application.email, application.phone && ` · ${application.phone}`]
					}),
					application.careers?.title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs tracking-[0.18em] uppercase text-accent",
						children: ["Applied for: ", application.careers.title]
					}),
					application.linkedin_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: application.linkedin_url,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-1 inline-block text-xs text-accent hover:underline",
						children: "LinkedIn / Portfolio"
					}),
					application.experience && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: application.experience
					}),
					application.cover_letter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground italic",
						children: application.cover_letter
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: application.status,
					onChange: (e) => onUpdateStatus(application.id, e.target.value),
					className: "rounded-sm border border-muted-foreground/20 bg-background px-3 py-2 text-xs focus:border-accent focus:outline-none",
					children: [
						"new",
						"reviewing",
						"shortlisted",
						"rejected",
						"hired"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s,
						children: s.charAt(0).toUpperCase() + s.slice(1)
					}, s))
				})
			})]
		})
	});
}
function statusBadge(status) {
	switch (status) {
		case "hired": return "bg-accent text-primary";
		case "shortlisted": return "bg-primary text-primary-foreground";
		case "rejected": return "bg-destructive/10 text-destructive border border-destructive/30";
		case "reviewing": return "bg-secondary text-foreground";
		default: return "border border-muted-foreground/30 text-muted-foreground";
	}
}
function careerToForm(c) {
	return {
		id: c.id,
		title: c.title,
		department: c.department ?? "",
		location: c.location ?? "",
		type: c.type ?? "",
		description: c.description ?? "",
		requirements: c.requirements ?? [],
		published: c.published
	};
}
function CareerEditDialog({ form, onChange, onClose, onSave, saving }) {
	const set = (k, v) => onChange({
		...form,
		[k]: v
	});
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	const labelCls = "text-[10px] tracking-[0.24em] uppercase text-muted-foreground";
	const inputCls = "mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-8 w-full max-w-2xl rounded-sm bg-card shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-muted-foreground/10 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl",
						children: form.id ? "Edit Opening" : "New Opening"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "text-muted-foreground hover:text-foreground text-xl leading-none",
						"aria-label": "Close",
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							children: "Title *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.title,
							onChange: (e) => set("title", e.target.value),
							className: inputCls,
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelCls,
									children: "Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.department,
									onChange: (e) => set("department", e.target.value),
									className: inputCls,
									placeholder: "e.g. Sales"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelCls,
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.location,
									onChange: (e) => set("location", e.target.value),
									className: inputCls,
									placeholder: "e.g. Dubai"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelCls,
									children: "Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.type,
									onChange: (e) => set("type", e.target.value),
									className: inputCls,
									placeholder: "e.g. Full-time"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							value: form.description,
							onChange: (e) => set("description", e.target.value),
							className: `${inputCls} resize-none`,
							placeholder: "Describe the role, responsibilities, and what success looks like."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							children: "Requirements (one per line)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							value: form.requirements.join("\n"),
							onChange: (e) => set("requirements", e.target.value.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 20)),
							className: `${inputCls} resize-none`,
							placeholder: "2+ years real estate experience\nUAE driving license\nFluent in English"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form.published,
								onChange: (e) => set("published", e.target.checked)
							}), "Published (visible on careers page)"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-3 border-t border-muted-foreground/10 px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-sm border border-muted-foreground/30 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase hover:bg-muted transition",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onSave,
						disabled: saving || !form.title.trim(),
						className: "rounded-sm bg-accent px-6 py-2.5 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 disabled:opacity-60",
						children: saving ? "Saving…" : "Save Opening"
					})]
				})
			]
		})
	});
}
function GalleryPanel({ enabled }) {
	const qc = useQueryClient();
	const listFn = useServerFn(listAdminGallery);
	const upsertFn = useServerFn(upsertGalleryImage);
	const deleteFn = useServerFn(deleteGalleryImage);
	const query = useQuery({
		queryKey: ["admin-gallery"],
		queryFn: () => listFn(),
		enabled
	});
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("");
	const [caption, setCaption] = (0, import_react.useState)("");
	const fileRef = (0, import_react.useRef)(null);
	const invalidate = () => {
		qc.invalidateQueries({ queryKey: ["admin-gallery"] });
		qc.invalidateQueries({ queryKey: ["public-gallery"] });
	};
	const upsertMut = useMutation({
		mutationFn: (data) => upsertFn({ data }),
		onSuccess: () => {
			toast.success("Gallery updated.");
			invalidate();
		},
		onError: (err) => toast.error(err.message ?? "Could not save.")
	});
	const deleteMut = useMutation({
		mutationFn: async (row) => {
			if (row.image_path) await supabase.storage.from("gallery-images").remove([row.image_path]);
			return deleteFn({ data: { id: row.id } });
		},
		onSuccess: () => {
			toast.success("Photo removed.");
			invalidate();
		},
		onError: (err) => toast.error(err.message ?? "Could not delete.")
	});
	const handleUpload = async (file) => {
		if (file.size > 10485760) {
			toast.error("Image must be under 10MB.");
			return;
		}
		setUploading(true);
		try {
			const ext = file.name.split(".").pop() || "jpg";
			const path = `gallery/${crypto.randomUUID()}.${ext}`;
			const { error } = await supabase.storage.from("gallery-images").upload(path, file, {
				contentType: file.type,
				upsert: false
			});
			if (error) throw error;
			await upsertMut.mutateAsync({
				title: title.trim() || null,
				caption: caption.trim() || null,
				image_path: path,
				image_url: null,
				sort_order: (query.data?.length ?? 0) + 1,
				published: true
			});
			setTitle("");
			setCaption("");
			if (fileRef.current) fileRef.current.value = "";
		} catch (err) {
			toast.error(err.message ?? "Upload failed.");
		} finally {
			setUploading(false);
		}
	};
	const rows = query.data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-sm bg-card p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl",
					children: "Add a photo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Upload an image (max 10MB). Optional title and caption appear on hover on the public gallery."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground",
						children: "Title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: title,
						onChange: (e) => setTitle(e.target.value),
						placeholder: "Optional",
						className: "mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-[10px] tracking-[0.24em] uppercase text-muted-foreground",
						children: "Caption"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: caption,
						onChange: (e) => setCaption(e.target.value),
						placeholder: "Optional",
						className: "mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "image/*",
						onChange: (e) => {
							const f = e.target.files?.[0];
							if (f) handleUpload(f);
						},
						className: "text-sm"
					}), uploading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.24em] uppercase text-muted-foreground",
						children: "Uploading…"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-serif text-lg",
				children: [
					"Gallery (",
					rows.length,
					")"
				]
			}), query.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: "Loading…"
			})]
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-sm bg-card p-8 text-center text-sm text-muted-foreground",
			children: "No photos yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryAdminTile, {
				row,
				onTogglePublish: () => upsertMut.mutate({
					id: row.id,
					title: row.title,
					caption: row.caption,
					image_path: row.image_path,
					image_url: row.image_url,
					sort_order: row.sort_order,
					published: !row.published
				}),
				onDelete: () => {
					if (confirm("Delete this photo? This cannot be undone.")) deleteMut.mutate(row);
				}
			}, row.id))
		})] })]
	});
}
function GalleryAdminTile({ row, onTogglePublish, onDelete }) {
	const [signed, setSigned] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		if (!row.image_path) {
			setSigned(null);
			return;
		}
		supabase.storage.from("gallery-images").createSignedUrl(row.image_path, 3600).then(({ data }) => {
			if (!cancelled && data?.signedUrl) setSigned(data.signedUrl);
		});
		return () => {
			cancelled = true;
		};
	}, [row.image_path]);
	const src = row.image_path ? signed : row.image_url;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-sm bg-card shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[4/3] bg-primary/5",
			children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: row.title ?? "",
				className: "h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full animate-pulse bg-primary/10" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-serif text-sm",
					children: row.title || "Untitled"
				}),
				row.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-2 text-xs text-muted-foreground",
					children: row.caption
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-sm px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase ${row.published ? "bg-accent text-primary" : "border border-muted-foreground/30 text-muted-foreground"}`,
							children: row.published ? "Live" : "Hidden"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onTogglePublish,
							className: "rounded-sm border border-primary/30 px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition",
							children: row.published ? "Hide" : "Publish"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onDelete,
							className: "rounded-sm border border-destructive/40 px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase text-destructive hover:bg-destructive hover:text-destructive-foreground transition",
							children: "Delete"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { AdminPage as component };
