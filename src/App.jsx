import { supabase } from './supabase'
import { useState, useEffect } from 'react'

const COLORS = { gold: "#D4AF37" }
const ADMIN_EMAIL = "elitealxor@gmail.com"

function Navbar({ cartCount, setPage, user, onSignOut, setSearch } ) {
  const [hovered, setHovered] = useState(null)

  return (
    <nav style={{
      background: "rgba(14, 10, 12, 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #4B2E3966",
      display: "flex", alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px", height: "68px",
      position: "sticky", top: 0, zIndex: 100,
    }}>

      {/* Logo */}
      <div onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
        <span style={{ fontSize: "22px", color: "#D4AF37" }}>✿</span>
        <span style={{ fontSize: "18px", fontWeight: "700", color: "#FAF5EF", letterSpacing: "3px", fontFamily: "sans-serif" }}>
          BLOOM<span style={{ color: "#D4AF37" }}>LUX</span>
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "8px" }}>
        {[["home", "Home"], ["shop", "Shop"], ["about", "About"], ["contact", "Contact"]].map(([pg, label]) => (
          <span
            key={label}
            onClick={() => setPage(pg)}
            onMouseEnter={() => setHovered(pg)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: hovered === pg ? "#FAF5EF" : "#9E8C94",
              cursor: "pointer",
              fontSize: "13px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              fontWeight: "500",
              padding: "6px 16px",
              borderRadius: "20px",
              background: hovered === pg ? "#4B2E3944" : "transparent",
              transition: "all 0.2s ease",
            }}>
            {label}
          </span>
        ))}
        {user && user.email === ADMIN_EMAIL && (
  <span onClick={() => setPage("admin")} style={{
    color: "#D4AF37", cursor: "pointer", fontSize: "13px",
    letterSpacing: "1.5px", textTransform: "uppercase",
    fontFamily: "sans-serif", fontWeight: "500",
    padding: "6px 16px", borderRadius: "20px",
    background: "#D4AF3722", border: "1px solid #D4AF3744",
  }}>Admin</span>
)}
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

        {/* Search bar */}
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "#1A1014", border: "1px solid #4B2E39",
          borderRadius: "20px", padding: "7px 16px",
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9E8C94" strokeWidth="2">
             <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
  placeholder="Search flowers..."
  onChange={(e) => {
    if (e.target.value.trim() !== "") {
      setSearch(e.target.value)
      setPage("shop")
    } else {
      setSearch("")
    }
  }}
  style={{
    background: "transparent", border: "none",
    outline: "none", color: "#FAF5EF",
    fontSize: "13px", fontFamily: "sans-serif",
    width: "140px",
  }}
/>
        </div>
        {/* Auth button */}
{user ? (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
  <span style={{ fontSize: "13px", color: "#9E8C94", fontFamily: "sans-serif" }}>
    Hi, {user.email.split("@")[0]} 👋
  </span>
  <span onClick={() => setPage("orders")} style={{
    fontSize: "12px", color: "#D4AF37",
    fontFamily: "sans-serif", cursor: "pointer",
    border: "1px solid #D4AF3744", borderRadius: "20px",
    padding: "6px 14px",
  }}>My Orders</span>
  <button onClick={onSignOut} style={{
    background: "transparent", border: "1px solid #4B2E39",
    borderRadius: "20px", padding: "6px 14px",
    color: "#9E8C94", fontSize: "12px", cursor: "pointer",
    fontFamily: "sans-serif",
  }}>Sign out</button>
</div>
) : (
  <button onClick={() => setPage("auth")} style={{
    background: "transparent", border: "1px solid #D4AF37",
    borderRadius: "20px", padding: "6px 16px",
    color: "#D4AF37", fontSize: "12px", cursor: "pointer",
    fontFamily: "sans-serif", fontWeight: "600",
  }}>Sign in</button>
)}

        {/* Cart */}
        <div
          onClick={() => setPage("cart")}
          style={{ cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{
            background: "#1A1014", border: "1px solid #4B2E39",
            borderRadius: "20px", padding: "7px 14px",
            display: "flex", alignItems: "center", gap: "6px",
          }}>
            <span style={{ fontSize: "15px" }}>🛒</span>
            {cartCount > 0 && (
              <span style={{
                background: "#800020", color: "#D4AF37",
                borderRadius: "10px", padding: "1px 7px",
                fontSize: "11px", fontFamily: "sans-serif", fontWeight: "700",
              }}>{cartCount}</span>
            )}
          </div>
        </div>

      </div>
    </nav>
  )
}
function Hero({ setPage }) {
  return (
    <div style={{
      minHeight: "92vh",
      display: "flex",
      alignItems: "center",
      padding: "0 80px",
      background: `linear-gradient(to right, #0E0A0Cdd 40%, #0E0A0C66 70%, transparent 100%),
                   radial-gradient(ellipse at 30% 80%, #80002066 0%, transparent 50%),
                   url('/src/assets/bg.png') center/cover no-repeat`,
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Left content */}
      <div style={{ maxWidth: "650px", zIndex: 1 }}>

        {/* Badge */}
        <div style={{
          display: "inline-block",
          border: "1px solid #D4AF37",
          padding: "4px 16px", borderRadius: "20px",
          marginBottom: "24px", fontSize: "12px",
          color: "#D4AF37", letterSpacing: "3px",
          textTransform: "uppercase", fontFamily: "sans-serif",
        }}>
          Pan-India Luxury Delivery
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: "68px", lineHeight: "1.05",
          margin: "0 0 24px", fontWeight: "400",
          color: "#FAF5EF",
        }}>
          Where Every<br />
          <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Petal</span> Tells<br />
          a Story
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: "17px", color: "#9E8C94",
          marginBottom: "40px", lineHeight: "1.7",
          fontFamily: "sans-serif", maxWidth: "460px",
        }}>
          Premium handcrafted floral arrangements delivered
          across India. From intimate bouquets to grand
          wedding installations.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            onClick={() => setPage("shop")}
            style={{
              padding: "16px 40px",
              background: "linear-gradient(135deg, #800020, #4B2E39)",
              border: "1px solid #D4AF37",
              borderRadius: "8px", color: "#D4AF37",
              fontSize: "14px", fontWeight: "700",
              cursor: "pointer", letterSpacing: "2px",
              textTransform: "uppercase", fontFamily: "sans-serif",
            }}>
            Shop Now
          </button>
          <button
            onClick={() => setPage("about")}
            style={{
              padding: "16px 40px",
              background: "transparent",
              border: "1px solid #D4AF3744",
              borderRadius: "8px", color: "#FAF5EF",
              fontSize: "14px", cursor: "pointer",
              letterSpacing: "2px", textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}>
            Our Story
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "48px", marginTop: "56px" }}>
          {[
            ["50K+", "Happy Customers"],
            ["200+", "Cities Covered"],
            ["15+", "Years of Excellence"],
          ].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontSize: "28px", color: "#D4AF37", fontWeight: "700" }}>{val}</div>
              <div style={{ fontSize: "12px", color: "#9E8C94", letterSpacing: "1px", textTransform: "uppercase", fontFamily: "sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
const PRODUCTS = [
  { id: 1, name: "Red Roses", pricePerHundred: 120, bouquetPrice: 2199, img: new URL('./assets/red-roses.jpg', import.meta.url).href, tag: "Bestseller", color: "Red / Pink" },
  { id: 2, name: "Orchid", pricePerHundred: 180, bouquetPrice: 1699, img: new URL('./assets/orchid.jpg', import.meta.url).href, tag: "Premium", color: "Purple / Lavender" },
  { id: 3, name: "Tulip", pricePerHundred: 90, bouquetPrice: 1299, img: new URL('./assets/tulip.jpg', import.meta.url).href, tag: "New", color: "Red / Pink" },
  { id: 4, name: "Lavender", pricePerHundred: 80, bouquetPrice: 999, img: new URL('./assets/lavender.jpg', import.meta.url).href, tag: null, color: "Purple / Lavender" },
  { id: 5, name: "Lily", pricePerHundred: 100, bouquetPrice: 1499, img: new URL('./assets/lily.jpg', import.meta.url).href, tag: "Bestseller", color: "White / Cream" },
  { id: 6, name: "Dahlia", pricePerHundred: 110, bouquetPrice: 1199, img: new URL('./assets/dahlia.jpg', import.meta.url).href, tag: null, color: "Mixed" },
  { id: 7, name: "Sunflower", pricePerHundred: 70, bouquetPrice: 899, img: new URL('./assets/sunflower.jpg', import.meta.url).href, tag: "New", color: "Yellow / Orange" },
  { id: 8, name: "Lotus", pricePerHundred: 150, bouquetPrice: 1399, img: new URL('./assets/lotus.jpg', import.meta.url).href, tag: null, color: "White / Cream" },
  { id: 9, name: "Jasmine", pricePerHundred: 60, bouquetPrice: 849, img: new URL('./assets/jasmine.png', import.meta.url).href, tag: null, color: "White / Cream" },
  { id: 10, name: "White Roses", pricePerHundred: 130, bouquetPrice: 1899, img: new URL('./assets/white-roses.png', import.meta.url).href, tag: "Premium", color: "White / Cream" },
  { id: 11, name: "Black Roses", pricePerHundred: 200, bouquetPrice: 2799, img: new URL('./assets/black-roses.jpg', import.meta.url).href, tag: "Rare", color: "Mixed" },
]

function Products({ onAdd, setPage }) {
  return (
    <div style={{ padding: "80px 60px", background: "#0E0A0C" }}>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>
          Curated For You
        </div>
        <h2 style={{ fontSize: "42px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
          Featured <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Collections</span>
        </h2>
      </div>

      {/* Cards Grid - shows first 4 on homepage */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>
  {PRODUCTS.slice(0, 4).map((product) => (
    <ProductCard key={product.id} product={product} onAdd={onAdd} />
  ))}
</div>

      {/* View All button */}
      <div style={{ textAlign: "center", marginTop: "48px" }}>
        <button
  onClick={() => setPage("shop")}
  style={{
    padding: "14px 48px",
    background: "transparent",
    border: "1px solid #D4AF37",
    borderRadius: "8px", color: "#D4AF37",
    fontSize: "13px", cursor: "pointer",
    letterSpacing: "2px", textTransform: "uppercase",
    fontFamily: "sans-serif",
  }}>
  View All Flowers
</button>
      </div>

    </div>
  )
}

function ProductCard({ product, onAdd }) {
  const [type, setType] = useState("weight")
  const [grams, setGrams] = useState(100)

  const price = type === "weight"
    ? Math.round((product.pricePerHundred * grams) / 100)
    : product.bouquetPrice

  return (
    <div style={{
      background: "#1A1014",
      borderRadius: "16px",
      border: "1px solid #4B2E39",
      overflow: "hidden",
    }}>
      {/* Image */}
      <div style={{ position: "relative" }}>
        <img src={product.img} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        {product.tag && (
          <span style={{
            position: "absolute", top: "12px", left: "12px",
            background: "#D4AF37", color: "#1C1C1C",
            fontSize: "10px", fontWeight: "700",
            padding: "3px 10px", borderRadius: "20px",
            letterSpacing: "1px", fontFamily: "sans-serif", textTransform: "uppercase",
          }}>{product.tag}</span>
        )}
        <span style={{
          position: "absolute", top: "12px", right: "12px",
          background: "#1A1014cc", color: "#9E8C94",
          fontSize: "10px", padding: "3px 8px",
          borderRadius: "12px", fontFamily: "sans-serif",
        }}>{product.color}</span>
      </div>

      <div style={{ padding: "16px 18px" }}>
        {/* Name */}
        <div style={{ fontSize: "15px", color: "#FAF5EF", marginBottom: "12px" }}>
          {product.name}
        </div>

        {/* Toggle */}
        <div style={{
          display: "flex", background: "#0E0A0C",
          borderRadius: "8px", padding: "3px",
          marginBottom: "12px", border: "1px solid #4B2E39",
        }}>
          {[["weight", "⚖️ Per 100gms"], ["bouquet", "💐 Bouquet"]].map(([t, label]) => (
            <button key={t} onClick={() => setType(t)} style={{
              flex: 1, padding: "6px", borderRadius: "6px", border: "none",
              background: type === t ? "linear-gradient(135deg, #800020, #4B2E39)" : "transparent",
              color: type === t ? "#D4AF37" : "#9E8C94",
              fontSize: "11px", cursor: "pointer",
              fontFamily: "sans-serif", fontWeight: "600",
            }}>{label}</button>
          ))}
        </div>

        {/* Grams selector — only show when weight mode */}
        {type === "weight" && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", color: "#9E8C94", fontFamily: "sans-serif" }}>Grams:</span>
            {[100, 200, 500].map((g) => (
              <button key={g} onClick={() => setGrams(g)} style={{
                padding: "4px 10px", borderRadius: "12px",
                border: `1px solid ${grams === g ? "#D4AF37" : "#4B2E39"}`,
                background: grams === g ? "#D4AF3722" : "transparent",
                color: grams === g ? "#D4AF37" : "#9E8C94",
                fontSize: "11px", cursor: "pointer",
                fontFamily: "sans-serif",
              }}>{g}g</button>
            ))}
          </div>
        )}

        {/* Price + Add */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "18px", color: "#D4AF37", fontWeight: "700", fontFamily: "sans-serif" }}>
              ₹{price.toLocaleString()}
            </span>
            {type === "weight" && (
              <span style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginLeft: "4px" }}>
                for {grams}g
              </span>
            )}
          </div>
          <button
            onClick={() => onAdd({ ...product, selectedType: type, selectedGrams: grams, finalPrice: price })}
            style={{
              background: "linear-gradient(135deg, #800020, #4B2E39)",
              border: "1px solid #D4AF3744", borderRadius: "8px",
              color: "#D4AF37", padding: "8px 16px",
              cursor: "pointer", fontSize: "12px",
              fontFamily: "sans-serif", fontWeight: "600",
            }}>
            Add +
          </button>
        </div>
      </div>
    </div>
  )
}
function Shop({ onAdd, search }) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [colorFilter, setColorFilter] = useState("All")
  const [typeFilter, setTypeFilter] = useState("All")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [searchTerm, setSearchTerm] = useState(search || "")

  useEffect(() => {
    if (search) setSearchTerm(search)
  }, [search])
  
  // rest of code...
  const COLORS = ["All", "Red / Pink", "White / Cream", "Purple / Lavender", "Yellow / Orange", "Mixed"]
  const TYPES = ["All", "Per 100gms", "Bouquet"]

  const filtered = PRODUCTS.filter((p) => {
    const matchColor = colorFilter === "All" || p.color === colorFilter
    const price = typeFilter === "Bouquet" ? p.bouquetPrice : p.pricePerHundred
    const matchMin = minPrice === "" || price >= Number(minPrice)
    const matchMax = maxPrice === "" || price <= Number(maxPrice)
    const matchSearch = searchTerm === "" || p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.color.toLowerCase().includes(searchTerm.toLowerCase())
  return matchColor && matchMin && matchMax && matchSearch
  })

  const activeFilterCount = [
    colorFilter !== "All",
    typeFilter !== "All",
    minPrice !== "",
    maxPrice !== "",
  ].filter(Boolean).length

  return (
    <div style={{ display: "flex", background: "#0E0A0C", minHeight: "100vh" }}>

      {/* Filter Sidebar */}
      <div style={{
        width: filtersOpen ? "280px" : "0px",
        minWidth: filtersOpen ? "280px" : "0px",
        overflow: "hidden",
        transition: "all 0.35s ease",
        background: "#1A1014",
        borderRight: filtersOpen ? "1px solid #4B2E39" : "none",
        padding: filtersOpen ? "40px 24px" : "40px 0px",
      }}>
       
        {/* Sidebar Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <span style={{ fontSize: "14px", color: "#D4AF37", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "sans-serif" }}>Filters</span>
          <span
            onClick={() => { setColorFilter("All"); setTypeFilter("All"); setMinPrice(""); setMaxPrice("") }}
            style={{ fontSize: "11px", color: "#9E8C94", cursor: "pointer", fontFamily: "sans-serif", textDecoration: "underline" }}>
            Clear all
          </span>
        </div>
         {/* Search inside shop */}
<div style={{ marginBottom: "24px" }}>
  <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "8px", letterSpacing: "1px", textTransform: "uppercase" }}>Search</div>
  <input
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search flowers..."
    style={{
      width: "100%", background: "#0E0A0C",
      border: "1px solid #4B2E39", borderRadius: "8px",
      padding: "8px 12px", color: "#FAF5EF",
      fontSize: "13px", outline: "none",
      fontFamily: "sans-serif", boxSizing: "border-box",
    }}
  />
</div>

        {/* Colour Filter */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Colour</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {COLORS.map((c) => (
              <div key={c} onClick={() => setColorFilter(c)} style={{
                display: "flex", alignItems: "center", gap: "10px",
                cursor: "pointer", padding: "8px 12px", borderRadius: "8px",
                background: colorFilter === c ? "#D4AF3722" : "transparent",
                border: `1px solid ${colorFilter === c ? "#D4AF37" : "transparent"}`,
                transition: "all 0.2s",
              }}>
                <div style={{
                  width: "12px", height: "12px", borderRadius: "50%",
                  border: `2px solid ${colorFilter === c ? "#D4AF37" : "#4B2E39"}`,
                  background: colorFilter === c ? "#D4AF37" : "transparent",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: "13px", color: colorFilter === c ? "#D4AF37" : "#9E8C94", fontFamily: "sans-serif" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Type</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {TYPES.map((t) => (
              <div key={t} onClick={() => setTypeFilter(t)} style={{
                display: "flex", alignItems: "center", gap: "10px",
                cursor: "pointer", padding: "8px 12px", borderRadius: "8px",
                background: typeFilter === t ? "#D4AF3722" : "transparent",
                border: `1px solid ${typeFilter === t ? "#D4AF37" : "transparent"}`,
                transition: "all 0.2s",
              }}>
                <div style={{
                  width: "12px", height: "12px", borderRadius: "50%",
                  border: `2px solid ${typeFilter === t ? "#D4AF37" : "#4B2E39"}`,
                  background: typeFilter === t ? "#D4AF37" : "transparent",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: "13px", color: typeFilter === t ? "#D4AF37" : "#9E8C94", fontFamily: "sans-serif" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Price (₹)</div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <input
              type="number" placeholder="Min"
              value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
              style={{
                width: "90px", background: "#0E0A0C",
                border: "1px solid #4B2E39", borderRadius: "8px",
                padding: "8px 10px", color: "#FAF5EF",
                fontSize: "13px", outline: "none", fontFamily: "sans-serif",
              }}
            />
            <span style={{ color: "#9E8C94", fontFamily: "sans-serif" }}>—</span>
            <input
              type="number" placeholder="Max"
              value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
              style={{
                width: "90px", background: "#0E0A0C",
                border: "1px solid #4B2E39", borderRadius: "8px",
                padding: "8px 10px", color: "#FAF5EF",
                fontSize: "13px", outline: "none", fontFamily: "sans-serif",
              }}
            />
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "60px 48px", transition: "all 0.35s ease" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "8px" }}>Our Collection</div>
            <h1 style={{ fontSize: "44px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
              All <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Flowers</span>
            </h1>
          </div>

          {/* Filter toggle button */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "12px 24px",
              background: filtersOpen ? "#D4AF3722" : "transparent",
              border: `1px solid ${filtersOpen ? "#D4AF37" : "#4B2E39"}`,
              borderRadius: "10px", color: filtersOpen ? "#D4AF37" : "#9E8C94",
              fontSize: "13px", cursor: "pointer",
              fontFamily: "sans-serif", fontWeight: "600",
              transition: "all 0.2s",
            }}>
            ⚙️ Filters
            {activeFilterCount > 0 && (
              <span style={{
                background: "#800020", color: "#D4AF37",
                borderRadius: "50%", width: "18px", height: "18px",
                fontSize: "11px", display: "flex",
                alignItems: "center", justifyContent: "center", fontWeight: "700",
              }}>{activeFilterCount}</span>
            )}
          </button>
        </div>

        {/* Results count */}
        <div style={{ fontSize: "13px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "24px" }}>
          {filtered.length} flowers found
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#9E8C94" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>🌿</div>
            <div style={{ fontFamily: "sans-serif", fontSize: "16px" }}>No flowers match your filters</div>
            <div
              onClick={() => { setColorFilter("All"); setTypeFilter("All"); setMinPrice(""); setMaxPrice("") }}
              style={{ color: "#D4AF37", cursor: "pointer", marginTop: "12px", fontFamily: "sans-serif", fontSize: "13px" }}>
              Clear filters
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {filtered.map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
          </div>
        )}

      </div>
    </div>
  )
}
function About() {
  return (
    <div style={{ background: "#0E0A0C" }}>

      {/* Hero BG Section */}
      <div style={{
        minHeight: "60vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center",
        background: `linear-gradient(to bottom, #0E0A0Caa 0%, #0E0A0Cee 100%),
                     url('/src/assets/about-bg.png') center/cover no-repeat`,
        padding: "80px 60px",
      }}>
        <div>
          <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>
            Est. 2010 · Hyderabad, India
          </div>
          <h1 style={{ fontSize: "56px", fontWeight: "400", color: "#FAF5EF", margin: "0 0 24px", lineHeight: "1.1" }}>
            Where Every <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Petal</span><br />Tells a Story
          </h1>
          <p style={{ fontSize: "17px", color: "#9E8C94", maxWidth: "560px", margin: "0 auto", lineHeight: "1.8", fontFamily: "sans-serif" }}>
            Born from grief, resilience, and a single jasmine flower that refused to die.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 60px" }}>

        {/* Opening */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>The Beginning</div>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif" }}>
              It began, as many beautiful things do, with something broken.
            </p>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif", marginTop: "16px" }}>
              On a rain-soaked evening in a quiet corner of the city, Aanya stood outside a closed-down storefront, its faded sign barely readable beneath peeling paint. The words <span style={{ color: "#FAF5EF", fontStyle: "italic" }}>"Mehra Florist"</span> hung like a memory no one had visited in years.
            </p>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif", marginTop: "16px" }}>
              Just a week before, she had lost her grandmother — the woman who taught her that flowers were more than decoration. <span style={{ color: "#FAF5EF", fontStyle: "italic" }}>"Every petal speaks,"</span> her grandmother used to say, gently arranging marigolds and roses into stories only she could read.
            </p>
          </div>
          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #4B2E39" }}>
            <img src="/src/assets/about-1.png" alt="Jasmine" style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "80px" }}>
          <div style={{ flex: 1, height: "1px", background: "#4B2E39" }} />
          <span style={{ color: "#D4AF37", fontSize: "20px" }}>✿</span>
          <div style={{ flex: 1, height: "1px", background: "#4B2E39" }} />
        </div>

        {/* Middle — image left, text right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #4B2E39" }}>
            <img src="/src/assets/about-2.png" alt="Shop" style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }} />
          </div>
          <div>
            <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>The Revival</div>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif" }}>
              That night, as rain tapped against the shuttered glass, she noticed something strange: a single white jasmine plant, still blooming, tucked in a cracked clay pot beside the door. Untouched. Unwatered. <span style={{ color: "#FAF5EF", fontStyle: "italic" }}>Alive.</span>
            </p>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif", marginTop: "16px" }}>
              Within a week, Aanya had tracked down the owner — a retired florist who hadn't reopened since his wife passed away. He handed her the keys with a tired smile, saying, <span style={{ color: "#FAF5EF", fontStyle: "italic" }}>"If you can bring it back to life, it's yours."</span>
            </p>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif", marginTop: "16px" }}>
              The place was a mess. Dust-covered shelves, dried stems, forgotten tools. But beneath it all, there was something waiting.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "80px" }}>
          <div style={{ flex: 1, height: "1px", background: "#4B2E39" }} />
          <span style={{ color: "#D4AF37", fontSize: "20px" }}>✿</span>
          <div style={{ flex: 1, height: "1px", background: "#4B2E39" }} />
        </div>

        {/* Bouquet meanings */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>The Language of Flowers</div>
          <h2 style={{ fontSize: "36px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
            Each Bouquet <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Tells a Story</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "80px" }}>
          {[
            ["🤍", "Apologies", "Soft whites and pale blues — for when words aren't enough."],
            ["💛", "New Beginnings", "Bright yellows and fresh greens — for doors just opening."],
            ["❤️", "Unspoken Love", "Deep reds softened with blush pinks — for feelings too big to say."],
          ].map(([icon, title, desc]) => (
            <div key={title} style={{
              background: "#1A1014", border: "1px solid #4B2E39",
              borderRadius: "16px", padding: "32px 24px", textAlign: "center",
            }}>
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>{icon}</div>
              <div style={{ fontSize: "16px", color: "#D4AF37", marginBottom: "10px" }}>{title}</div>
              <div style={{ fontSize: "13px", color: "#9E8C94", lineHeight: "1.7", fontFamily: "sans-serif" }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Final section */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>Today</div>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif" }}>
              Customers didn't just come to buy flowers. They came to say things they couldn't put into words.
            </p>
            <p style={{ fontSize: "16px", color: "#9E8C94", lineHeight: "2", fontFamily: "sans-serif", marginTop: "16px" }}>
              And every evening, just before closing, Aanya would place a small jasmine flower by the window — the same kind she had found on that rainy night.
            </p>
            <p style={{ fontSize: "18px", color: "#FAF5EF", lineHeight: "2", fontFamily: "Georgia, serif", marginTop: "24px", fontStyle: "italic", borderLeft: "3px solid #D4AF37", paddingLeft: "20px" }}>
              "That even in the most forgotten places, something beautiful can begin again."
            </p>
          </div>
          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #4B2E39" }}>
            <img src="/src/assets/about-3.png" alt="Bouquet" style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }} />
          </div>
        </div>

      </div>
    </div>
  )
}
function Cart({  cart, updateQty, removeFromCart, setPage, addToCart  }) {
  const total = cart.reduce((s, i) => s + i.finalPrice * i.qty, 0)
  const [ordered, setOrdered] = useState(false)

  if (ordered) return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0E0A0C" }}>
      <div style={{ fontSize: "72px", marginBottom: "24px" }}>🌹</div>
      <h2 style={{ fontSize: "36px", fontWeight: "400", color: "#FAF5EF", marginBottom: "12px" }}>Order Placed!</h2>
      <p style={{ color: "#9E8C94", fontFamily: "sans-serif", fontSize: "16px", marginBottom: "32px" }}>
        Thank you! Your flowers are being prepared with love.
      </p>
      <button onClick={() => setPage("home")} style={{
        padding: "14px 40px", background: "linear-gradient(135deg, #800020, #4B2E39)",
        border: "1px solid #D4AF37", borderRadius: "8px", color: "#D4AF37",
        fontSize: "14px", cursor: "pointer", letterSpacing: "2px",
        textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "700",
      }}>Back to Home</button>
    </div>
  )

  return (
    <div style={{ background: "#0E0A0C", minHeight: "100vh", padding: "60px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "8px" }}>Review</div>
          <h1 style={{ fontSize: "44px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
            Your <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Cart</span>
          </h1>
        </div>

        {cart.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: "72px", marginBottom: "24px" }}>🌸</div>
            <div style={{ fontSize: "18px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "32px" }}>Your cart is empty</div>
            <button onClick={() => setPage("shop")} style={{
              padding: "14px 40px", background: "linear-gradient(135deg, #800020, #4B2E39)",
              border: "1px solid #D4AF37", borderRadius: "8px", color: "#D4AF37",
              fontSize: "14px", cursor: "pointer", letterSpacing: "2px",
              textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "700",
            }}>Browse Flowers</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "32px", alignItems: "start" }}>

            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {cart.map((item) => (
                <div key={item.cartKey} style={{
                  background: "#1A1014", border: "1px solid #4B2E39",
                  borderRadius: "16px", padding: "20px 24px",
                  display: "flex", gap: "20px", alignItems: "center",
                }}>
                  {/* Image */}
                  <img src={item.img} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "12px", flexShrink: 0 }} />

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "16px", color: "#FAF5EF", marginBottom: "4px" }}>{item.name}</div>
                    <div style={{ fontSize: "12px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "12px" }}>
                      {item.selectedType === "weight" ? `Per 100gms · ${item.selectedGrams}g` : "Bouquet"}
                      {" · "}{item.color}
                    </div>
                    {/* Qty controls */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <button onClick={() => updateQty(item.cartKey, -1)} style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        border: "1px solid #D4AF37", background: "transparent",
                        color: "#D4AF37", cursor: "pointer", fontSize: "16px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>−</button>
                      <span style={{ fontSize: "15px", color: "#FAF5EF", fontFamily: "sans-serif", minWidth: "20px", textAlign: "center" }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.cartKey, 1)} style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        border: "1px solid #D4AF37", background: "transparent",
                        color: "#D4AF37", cursor: "pointer", fontSize: "16px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>+</button>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "18px", color: "#D4AF37", fontWeight: "700", fontFamily: "sans-serif", marginBottom: "8px" }}>
                      ₹{(item.finalPrice * item.qty).toLocaleString()}
                    </div>
                    <span onClick={() => removeFromCart(item.cartKey)} style={{
                      fontSize: "12px", color: "#9E8C94", cursor: "pointer",
                      fontFamily: "sans-serif", textDecoration: "underline",
                    }}>Remove</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div style={{
              background: "#1A1014", border: "1px solid #4B2E39",
              borderRadius: "16px", padding: "28px 24px",
              position: "sticky", top: "88px",
            }}>
              <div style={{ fontSize: "14px", color: "#D4AF37", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "24px" }}>Order Summary</div>

              {/* Line items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontFamily: "sans-serif" }}>
                  <span style={{ color: "#9E8C94" }}>Subtotal</span>
                  <span style={{ color: "#FAF5EF" }}>₹{total.toLocaleString()}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontFamily: "sans-serif" }}>
                  <span style={{ color: "#9E8C94" }}>Delivery</span>
                  <span style={{ color: "#4CAF50" }}>FREE</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontFamily: "sans-serif" }}>
                  <span style={{ color: "#9E8C94" }}>Tax (5%)</span>
                  <span style={{ color: "#FAF5EF" }}>₹{Math.round(total * 0.05).toLocaleString()}</span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "#4B2E39", marginBottom: "20px" }} />

              {/* Total */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                <span style={{ fontSize: "16px", color: "#FAF5EF", fontFamily: "sans-serif", fontWeight: "600" }}>Total</span>
                <span style={{ fontSize: "22px", color: "#D4AF37", fontWeight: "700", fontFamily: "sans-serif" }}>
                  ₹{Math.round(total * 1.05).toLocaleString()}
                </span>
              </div>

              {/* Checkout button */}
              <button onClick={() => setPage("checkout")} style={{
  width: "100%", padding: "15px",
  background: "linear-gradient(135deg, #800020, #4B2E39)",
  border: "1px solid #D4AF37", borderRadius: "10px",
  color: "#D4AF37", fontSize: "14px", fontWeight: "700",
  cursor: "pointer", letterSpacing: "2px",
  textTransform: "uppercase", fontFamily: "sans-serif",
}}>
  Proceed to Checkout 🌹
</button>

              <div style={{ textAlign: "center", marginTop: "16px", fontSize: "12px", color: "#9E8C94", fontFamily: "sans-serif" }}>
                Free delivery across India · Same day available
              </div>
            </div>

          </div>
        )}
         {/* Suggestions */}
        {cart.length > 0 && (
          <div style={{ marginTop: "64px" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "8px" }}>You Might Also Like</div>
              <h2 style={{ fontSize: "32px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
                More <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Blooms</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              {PRODUCTS
                .filter((p) => !cart.find((i) => i.id === p.id))
                .sort(() => Math.random() - 0.5)
                .slice(0, 4)
                .map((p) => (
                  <ProductCard key={p.id} product={p} onAdd={addToCart} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
function Auth({ setUser, setPage }) {
  const [mode, setMode] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setError("")
    setLoading(true)
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        // Save profile
        await supabase.from("profiles").insert({
          id: data.user.id,
          name,
          email,
        })
        setUser(data.user)
        setPage("home")
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        setUser(data.user)
        setPage("home")
      }
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#0E0A0C",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px",
    }}>
      <div style={{
        background: "#1A1014", border: "1px solid #4B2E39",
        borderRadius: "24px", padding: "48px 40px",
        width: "100%", maxWidth: "440px",
      }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "36px", marginBottom: "8px" }}>✿</div>
          <div style={{ fontSize: "20px", fontWeight: "700", color: "#FAF5EF", letterSpacing: "3px", fontFamily: "sans-serif" }}>
            BLOOM<span style={{ color: "#D4AF37" }}>LUX</span>
          </div>
        </div>

        {/* Toggle */}
        <div style={{
          display: "flex", background: "#0E0A0C",
          borderRadius: "10px", padding: "4px",
          marginBottom: "32px", border: "1px solid #4B2E39",
        }}>
          {[["login", "Sign In"], ["signup", "Create Account"]].map(([m, label]) => (
            <button key={m} onClick={() => { setMode(m); setError("") }} style={{
              flex: 1, padding: "10px",
              borderRadius: "8px", border: "none",
              background: mode === m ? "linear-gradient(135deg, #800020, #4B2E39)" : "transparent",
              color: mode === m ? "#D4AF37" : "#9E8C94",
              fontSize: "13px", cursor: "pointer",
              fontFamily: "sans-serif", fontWeight: "600",
              letterSpacing: "0.5px",
            }}>{label}</button>
          ))}
        </div>

        {/* Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
          {mode === "signup" && (
            <div>
              <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>Full Name</div>
              <input
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                style={{
                  width: "100%", background: "#0E0A0C",
                  border: "1px solid #4B2E39", borderRadius: "8px",
                  padding: "12px 16px", color: "#FAF5EF",
                  fontSize: "14px", outline: "none",
                  fontFamily: "sans-serif", boxSizing: "border-box",
                }}
              />
            </div>
          )}
          <div>
            <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>Email</div>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                width: "100%", background: "#0E0A0C",
                border: "1px solid #4B2E39", borderRadius: "8px",
                padding: "12px 16px", color: "#FAF5EF",
                fontSize: "14px", outline: "none",
                fontFamily: "sans-serif", boxSizing: "border-box",
              }}
            />
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>Password</div>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%", background: "#0E0A0C",
                border: "1px solid #4B2E39", borderRadius: "8px",
                padding: "12px 16px", color: "#FAF5EF",
                fontSize: "14px", outline: "none",
                fontFamily: "sans-serif", boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: "#80002022", border: "1px solid #800020",
            borderRadius: "8px", padding: "10px 14px",
            color: "#ff6b6b", fontSize: "13px",
            fontFamily: "sans-serif", marginBottom: "16px",
          }}>{error}</div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%", padding: "14px",
            background: "linear-gradient(135deg, #800020, #4B2E39)",
            border: "1px solid #D4AF37", borderRadius: "10px",
            color: "#D4AF37", fontSize: "14px", fontWeight: "700",
            cursor: loading ? "not-allowed" : "pointer",
            letterSpacing: "2px", textTransform: "uppercase",
            fontFamily: "sans-serif", opacity: loading ? 0.7 : 1,
          }}>
          {loading ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
        </button>

      </div>
    </div>
  )
}

function Checkout({ cart, user, setPage, setCart }) {
  const total = cart.reduce((s, i) => s + i.finalPrice * i.qty, 0)
  const finalTotal = Math.round(total * 1.05)

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [loadingAddress, setLoadingAddress] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [ordered, setOrdered] = useState(false)

  const [address, setAddress] = useState({
    name: "", phone: "", email: "",
    address: "", city: "", pincode: ""
  })

  // Load saved address on mount
  useEffect(() => {
    const loadProfile = async () => {
      if (!user) { setLoadingAddress(false); return }
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()
      if (data) {
        setAddress({
          name: data.name || "",
          phone: data.phone || "",
          email: data.email || user.email || "",
          address: data.address || "",
          city: data.city || "",
          pincode: data.pincode || "",
        })
      }
      setLoadingAddress(false)
    }
    loadProfile()
  }, [user])
  useEffect(() => {
  if (!user && !loadingAddress) {
    alert("Please sign in to place an order!")
    setPage("auth")
  }
}, [user, loadingAddress])

  const saveAddress = async () => {
    if (!address.name || !address.phone || !address.address || !address.city || !address.pincode) {
      alert("Please fill all fields!")
      return
    }
    if (user) {
      await supabase.from("profiles").upsert({
        id: user.id,
        ...address,
      })
    }
    setStep(2)
  }

  const placeOrder = async () => {
    if (!paymentMethod) { alert("Please select a payment method!"); return }
    setLoading(true)
    try {
      const items = cart.map((i) => `${i.name} (${i.selectedType === "weight" ? i.selectedGrams + "g" : "Bouquet"}) x${i.qty}`).join(", ")
      if (user) {
        await supabase.from("orders").insert({
          user_id: user.id,
          items,
          total: finalTotal,
          payment_method: paymentMethod,
          address: address.address,
          city: address.city,
          pincode: address.pincode,
          status: "placed",
        })
      }
      setCart([])
      setOrdered(true)
    } catch (err) {
      alert("Something went wrong. Please try again.")
    }
    setLoading(false)
  }

  if (ordered) return (
    <div style={{ minHeight: "100vh", background: "#0E0A0C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontSize: "72px", marginBottom: "24px" }}>🌹</div>
      <h2 style={{ fontSize: "36px", fontWeight: "400", color: "#FAF5EF", marginBottom: "12px" }}>Order Placed!</h2>
      <p style={{ color: "#9E8C94", fontFamily: "sans-serif", fontSize: "16px", marginBottom: "8px" }}>
        Thank you, {address.name}! Your flowers are being prepared with love.
      </p>
      <p style={{ color: "#9E8C94", fontFamily: "sans-serif", fontSize: "14px", marginBottom: "32px" }}>
        Delivering to {address.city} — {address.pincode}
      </p>
      <button onClick={() => setPage("home")} style={{
        padding: "14px 40px", background: "linear-gradient(135deg, #800020, #4B2E39)",
        border: "1px solid #D4AF37", borderRadius: "8px", color: "#D4AF37",
        fontSize: "14px", cursor: "pointer", letterSpacing: "2px",
        textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "700",
      }}>Back to Home</button>
    </div>
  )

  return (
    <div style={{ background: "#0E0A0C", minHeight: "100vh", padding: "60px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "8px" }}>Checkout</div>
          <h1 style={{ fontSize: "44px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
            {step === 1 ? <>Delivery <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Address</span></> : <>Payment <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Method</span></>}
          </h1>
        </div>

        {/* Steps indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "48px" }}>
          {["Delivery Address", "Payment"].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: step > i + 1 ? COLORS.gold : step === i + 1 ? "linear-gradient(135deg, #800020, #4B2E39)" : "transparent",
                  border: `2px solid ${step >= i + 1 ? "#D4AF37" : "#4B2E39"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", color: "#D4AF37", fontFamily: "sans-serif", fontWeight: "700",
                }}>{step > i + 1 ? "✓" : i + 1}</div>
                <span style={{ fontSize: "13px", color: step >= i + 1 ? "#D4AF37" : "#9E8C94", fontFamily: "sans-serif" }}>{s}</span>
              </div>
              {i < 1 && <div style={{ flex: 1, height: "1px", background: step > 1 ? "#D4AF37" : "#4B2E39", margin: "0 16px" }} />}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "32px", alignItems: "start" }}>

          {/* Left — Step content */}
          <div>
            {step === 1 && (
              <div style={{ background: "#1A1014", border: "1px solid #4B2E39", borderRadius: "20px", padding: "36px" }}>
                {loadingAddress ? (
                  <div style={{ color: "#9E8C94", fontFamily: "sans-serif", textAlign: "center", padding: "40px" }}>Loading saved address...</div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {user && (
                      <div style={{ background: "#D4AF3711", border: "1px solid #D4AF3733", borderRadius: "8px", padding: "10px 16px", fontSize: "12px", color: "#D4AF37", fontFamily: "sans-serif" }}>
                        ✓ Address will be saved to your account automatically
                      </div>
                    )}
                    {[
                      ["name", "Full Name", "text", "Your full name"],
                      ["phone", "Phone Number", "tel", "+91 XXXXX XXXXX"],
                      ["email", "Email Address", "email", "your@email.com"],
                      ["address", "Street Address", "text", "House/Flat no, Street, Area"],
                      ["city", "City", "text", "Mumbai, Delhi, Hyderabad..."],
                      ["pincode", "Pincode", "text", "6-digit pincode"],
                    ].map(([field, label, type, placeholder]) => (
                      <div key={field}>
                        <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</div>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={address[field]}
                          onChange={(e) => setAddress({ ...address, [field]: e.target.value })}
                          style={{
                            width: "100%", background: "#0E0A0C",
                            border: "1px solid #4B2E39", borderRadius: "8px",
                            padding: "12px 16px", color: "#FAF5EF",
                            fontSize: "14px", outline: "none",
                            fontFamily: "sans-serif", boxSizing: "border-box",
                          }}
                        />
                      </div>
                    ))}
                    <button onClick={saveAddress} style={{
                      width: "100%", padding: "14px",
                      background: "linear-gradient(135deg, #800020, #4B2E39)",
                      border: "1px solid #D4AF37", borderRadius: "10px",
                      color: "#D4AF37", fontSize: "14px", fontWeight: "700",
                      cursor: "pointer", letterSpacing: "2px",
                      textTransform: "uppercase", fontFamily: "sans-serif",
                      marginTop: "8px",
                    }}>
                      Continue to Payment →
                    </button>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div style={{ background: "#1A1014", border: "1px solid #4B2E39", borderRadius: "20px", padding: "36px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                  {[
                    ["upi", "💳 UPI", "GPay, PhonePe, Paytm & more"],
                    ["cod", "💵 Cash on Delivery", "Pay when your flowers arrive"],
                    ["netbanking", "🏦 Net Banking", "All major Indian banks"],
                    ["card", "💳 Credit / Debit Card", "Visa, Mastercard, RuPay"],
                  ].map(([val, label, desc]) => (
                    <div key={val} onClick={() => setPaymentMethod(val)} style={{
                      padding: "20px 24px", borderRadius: "12px", cursor: "pointer",
                      border: `1px solid ${paymentMethod === val ? "#D4AF37" : "#4B2E39"}`,
                      background: paymentMethod === val ? "#D4AF3711" : "transparent",
                      display: "flex", alignItems: "center", gap: "16px",
                      transition: "all 0.2s",
                    }}>
                      <div style={{
                        width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                        border: `2px solid ${paymentMethod === val ? "#D4AF37" : "#4B2E39"}`,
                        background: paymentMethod === val ? "#D4AF37" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {paymentMethod === val && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1C1C1C" }} />}
                      </div>
                      <div>
                        <div style={{ fontSize: "15px", color: paymentMethod === val ? "#D4AF37" : "#FAF5EF", fontFamily: "sans-serif", fontWeight: "600" }}>{label}</div>
                        <div style={{ fontSize: "12px", color: "#9E8C94", fontFamily: "sans-serif", marginTop: "2px" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setStep(1)} style={{
                    flex: 1, padding: "14px",
                    background: "transparent", border: "1px solid #4B2E39",
                    borderRadius: "10px", color: "#9E8C94",
                    fontSize: "14px", cursor: "pointer",
                    fontFamily: "sans-serif",
                  }}>← Back</button>
                  <button onClick={placeOrder} disabled={loading} style={{
                    flex: 2, padding: "14px",
                    background: "linear-gradient(135deg, #800020, #4B2E39)",
                    border: "1px solid #D4AF37", borderRadius: "10px",
                    color: "#D4AF37", fontSize: "14px", fontWeight: "700",
                    cursor: loading ? "not-allowed" : "pointer",
                    letterSpacing: "2px", textTransform: "uppercase",
                    fontFamily: "sans-serif", opacity: loading ? 0.7 : 1,
                  }}>
                    {loading ? "Placing Order..." : `Place Order · ₹${finalTotal.toLocaleString()}`}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right — Order summary */}
          <div style={{ background: "#1A1014", border: "1px solid #4B2E39", borderRadius: "16px", padding: "24px", position: "sticky", top: "88px" }}>
            <div style={{ fontSize: "13px", color: "#D4AF37", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "20px" }}>Order Summary</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
              {cart.map((item) => (
                <div key={item.cartKey} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <img src={item.img} style={{ width: "48px", height: "48px", borderRadius: "8px", objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", color: "#FAF5EF", fontFamily: "sans-serif" }}>{item.name}</div>
                    <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif" }}>
                      {item.selectedType === "weight" ? `${item.selectedGrams}g` : "Bouquet"} × {item.qty}
                    </div>
                  </div>
                  <div style={{ fontSize: "13px", color: "#D4AF37", fontFamily: "sans-serif", fontWeight: "700" }}>
                    ₹{(item.finalPrice * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ height: "1px", background: "#4B2E39", marginBottom: "16px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px", fontFamily: "sans-serif" }}>
              <span style={{ color: "#9E8C94" }}>Subtotal</span>
              <span style={{ color: "#FAF5EF" }}>₹{total.toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px", fontFamily: "sans-serif" }}>
              <span style={{ color: "#9E8C94" }}>Delivery</span>
              <span style={{ color: "#4CAF50" }}>FREE</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", fontSize: "13px", fontFamily: "sans-serif" }}>
              <span style={{ color: "#9E8C94" }}>Tax (5%)</span>
              <span style={{ color: "#FAF5EF" }}>₹{Math.round(total * 0.05).toLocaleString()}</span>
            </div>
            <div style={{ height: "1px", background: "#4B2E39", marginBottom: "16px" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "15px", color: "#FAF5EF", fontFamily: "sans-serif", fontWeight: "600" }}>Total</span>
              <span style={{ fontSize: "20px", color: "#D4AF37", fontWeight: "700", fontFamily: "sans-serif" }}>₹{finalTotal.toLocaleString()}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function Contact({ setPage }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill name, email and message!")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <div style={{ background: "#0E0A0C", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{
        padding: "80px 60px 60px",
        textAlign: "center",
        background: `radial-gradient(ellipse at 50% 100%, #4B2E3955 0%, transparent 60%)`,
      }}>
        <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>Get In Touch</div>
        <h1 style={{ fontSize: "52px", fontWeight: "400", color: "#FAF5EF", margin: "0 0 16px", lineHeight: "1.1" }}>
          We'd Love to <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Hear</span> from You
        </h1>
        <p style={{ fontSize: "16px", color: "#9E8C94", fontFamily: "sans-serif", maxWidth: "480px", margin: "0 auto", lineHeight: "1.7" }}>
          Whether it's a custom order, bulk enquiry, or just a question — we're here for you.
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 60px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>

        {/* Left — Contact Form */}
        <div style={{ background: "#1A1014", border: "1px solid #4B2E39", borderRadius: "20px", padding: "40px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: "56px", marginBottom: "20px" }}>🌸</div>
              <h2 style={{ fontSize: "24px", fontWeight: "400", color: "#FAF5EF", marginBottom: "12px" }}>Message Sent!</h2>
              <p style={{ color: "#9E8C94", fontFamily: "sans-serif", fontSize: "14px", marginBottom: "24px", lineHeight: "1.7" }}>
                Thank you, {form.name}! We'll get back to you within 2 hours.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }) }} style={{
                padding: "10px 28px", background: "transparent",
                border: "1px solid #D4AF37", borderRadius: "8px",
                color: "#D4AF37", fontSize: "13px", cursor: "pointer",
                fontFamily: "sans-serif",
              }}>Send Another</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "24px" }}>Send a Message</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  ["name", "Full Name", "text", "Your name"],
                  ["email", "Email", "email", "your@email.com"],
                  ["phone", "Phone (optional)", "tel", "+91 XXXXX XXXXX"],
                  ["subject", "Subject", "text", "Custom order, Bulk enquiry..."],
                ].map(([field, label, type, placeholder]) => (
                  <div key={field}>
                    <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</div>
                    <input
                      type={type} placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      style={{
                        width: "100%", background: "#0E0A0C",
                        border: "1px solid #4B2E39", borderRadius: "8px",
                        padding: "12px 16px", color: "#FAF5EF",
                        fontSize: "14px", outline: "none",
                        fontFamily: "sans-serif", boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>Message</div>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%", background: "#0E0A0C",
                      border: "1px solid #4B2E39", borderRadius: "8px",
                      padding: "12px 16px", color: "#FAF5EF",
                      fontSize: "14px", outline: "none", resize: "vertical",
                      fontFamily: "sans-serif", boxSizing: "border-box",
                    }}
                  />
                </div>
                <button onClick={handleSubmit} disabled={loading} style={{
                  width: "100%", padding: "14px",
                  background: "linear-gradient(135deg, #800020, #4B2E39)",
                  border: "1px solid #D4AF37", borderRadius: "10px",
                  color: "#D4AF37", fontSize: "14px", fontWeight: "700",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "2px", textTransform: "uppercase",
                  fontFamily: "sans-serif", opacity: loading ? 0.7 : 1,
                }}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right — Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Info cards */}
          {[
            ["📍", "Visit Us", "Plot 45, Banjara Hills\nHyderabad — 500034, Telangana"],
            ["📞", "Call Us", "+91 98765 43210\nMon–Sun, 9 AM to 9 PM"],
            ["📧", "Email Us", "hello@bloomlux.in\norders@bloomlux.in"],
            ["🚚", "Delivery", "Same-day delivery available\n200+ cities across India"],
          ].map(([icon, title, info]) => (
            <div key={title} style={{
              background: "#1A1014", border: "1px solid #4B2E39",
              borderRadius: "16px", padding: "24px 28px",
              display: "flex", gap: "20px", alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "28px", flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "1px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "6px" }}>{title}</div>
                {info.split("\n").map((line, i) => (
                  <div key={i} style={{ fontSize: "14px", color: "#9E8C94", fontFamily: "sans-serif", lineHeight: "1.6" }}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          {/* Business hours */}
          <div style={{ background: "#1A1014", border: "1px solid #4B2E39", borderRadius: "16px", padding: "24px 28px" }}>
            <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "1px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>Business Hours</div>
            {[
              ["Monday – Friday", "8:00 AM – 9:00 PM"],
              ["Saturday", "8:00 AM – 10:00 PM"],
              ["Sunday", "10:00 AM – 8:00 PM"],
            ].map(([day, hours]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontSize: "13px", color: "#9E8C94", fontFamily: "sans-serif" }}>{day}</span>
                <span style={{ fontSize: "13px", color: "#FAF5EF", fontFamily: "sans-serif" }}>{hours}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
function Admin({ user, setPage }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(null)

  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) {
      setPage("home")
      return
    }
    fetchOrders()
  }, [user])

  const fetchOrders = async () => {
    setLoading(true)
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false })
    setOrders(data || [])
    setLoading(false)
  }

  const updateStatus = async (id, status) => {
    setUpdating(id)
    await supabase.from("orders").update({ status }).eq("id", id)
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o))
    setUpdating(null)
  }

  const STATUS_COLORS = {
    placed: { bg: "#D4AF3722", border: "#D4AF37", color: "#D4AF37" },
    preparing: { bg: "#80002222", border: "#800020", color: "#ff6b6b" },
    out_for_delivery: { bg: "#1a4a8a22", border: "#4488ff", color: "#4488ff" },
    delivered: { bg: "#1a4a2a22", border: "#44aa66", color: "#44aa66" },
    cancelled: { bg: "#33333322", border: "#666", color: "#888" },
  }

  const totalRevenue = orders
    .filter((o) => o.status !== "cancelled")
    .reduce((s, o) => s + Number(o.total), 0)

  if (!user || user.email !== ADMIN_EMAIL) return null

  return (
    <div style={{ background: "#0E0A0C", minHeight: "100vh", padding: "48px 48px" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
        <div>
          <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "8px" }}>BloomLux</div>
          <h1 style={{ fontSize: "40px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
            Admin <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Panel</span>
          </h1>
        </div>
        <button onClick={fetchOrders} style={{
          background: "transparent", border: "1px solid #4B2E39",
          borderRadius: "8px", padding: "10px 20px",
          color: "#9E8C94", fontSize: "13px", cursor: "pointer",
          fontFamily: "sans-serif",
        }}>↻ Refresh</button>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "40px" }}>
        {[
          ["Total Orders", orders.length, "🌹"],
          ["Revenue", `₹${totalRevenue.toLocaleString()}`, "💰"],
          ["Delivered", orders.filter((o) => o.status === "delivered").length, "✅"],
          ["Pending", orders.filter((o) => o.status === "placed" || o.status === "preparing").length, "⏳"],
        ].map(([label, value, icon]) => (
          <div key={label} style={{
            background: "#1A1014", border: "1px solid #4B2E39",
            borderRadius: "16px", padding: "24px",
          }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
            <div style={{ fontSize: "28px", color: "#D4AF37", fontWeight: "700", fontFamily: "sans-serif", marginBottom: "4px" }}>{value}</div>
            <div style={{ fontSize: "12px", color: "#9E8C94", fontFamily: "sans-serif", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Orders Table */}
      <div style={{ background: "#1A1014", border: "1px solid #4B2E39", borderRadius: "20px", overflow: "hidden" }}>
        <div style={{ padding: "24px 28px", borderBottom: "1px solid #4B2E39", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "14px", color: "#D4AF37", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "sans-serif" }}>All Orders</span>
          <span style={{ fontSize: "13px", color: "#9E8C94", fontFamily: "sans-serif" }}>{orders.length} orders</span>
        </div>

        {loading ? (
          <div style={{ padding: "60px", textAlign: "center", color: "#9E8C94", fontFamily: "sans-serif" }}>Loading orders...</div>
        ) : orders.length === 0 ? (
          <div style={{ padding: "60px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌿</div>
            <div style={{ color: "#9E8C94", fontFamily: "sans-serif" }}>No orders yet</div>
          </div>
        ) : (
          <div>
            {orders.map((order, idx) => (
              <div key={order.id} style={{
                padding: "20px 28px",
                borderBottom: idx < orders.length - 1 ? "1px solid #4B2E3955" : "none",
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1.2fr",
                gap: "16px", alignItems: "center",
              }}>

                {/* Order ID + Date */}
                <div>
                  <div style={{ fontSize: "12px", color: "#FAF5EF", fontFamily: "sans-serif", marginBottom: "4px" }}>
                    #{order.id.slice(0, 8).toUpperCase()}
                  </div>
                  <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif" }}>
                    {new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </div>
                </div>

                {/* Items */}
                <div style={{ fontSize: "12px", color: "#9E8C94", fontFamily: "sans-serif", lineHeight: "1.5" }}>
                  {order.items}
                </div>

                {/* Address */}
                <div>
                  <div style={{ fontSize: "12px", color: "#FAF5EF", fontFamily: "sans-serif" }}>{order.city}</div>
                  <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif" }}>{order.pincode}</div>
                </div>

                {/* Total */}
                <div style={{ fontSize: "15px", color: "#D4AF37", fontWeight: "700", fontFamily: "sans-serif" }}>
                  ₹{Number(order.total).toLocaleString()}
                </div>

                {/* Status Dropdown */}
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  disabled={updating === order.id}
                  style={{
                    background: STATUS_COLORS[order.status]?.bg || "#1A1014",
                    border: `1px solid ${STATUS_COLORS[order.status]?.border || "#4B2E39"}`,
                    borderRadius: "8px", padding: "8px 12px",
                    color: STATUS_COLORS[order.status]?.color || "#FAF5EF",
                    fontSize: "12px", cursor: "pointer",
                    fontFamily: "sans-serif", outline: "none",
                    opacity: updating === order.id ? 0.6 : 1,
                  }}>
                  <option value="placed">🌹 Placed</option>
                  <option value="preparing">🌿 Preparing</option>
                  <option value="out_for_delivery">🚚 Out for Delivery</option>
                  <option value="delivered">✅ Delivered</option>
                  <option value="cancelled">❌ Cancelled</option>
                </select>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function OrderHistory({ user, setPage }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) { setPage("auth"); return }
    const fetchOrders = async () => {
      const { data } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
      setOrders(data || [])
      setLoading(false)
    }
    fetchOrders()
  }, [user])

  const STATUS_STYLES = {
    placed: { color: "#D4AF37", label: "🌹 Order Placed" },
    preparing: { color: "#ff9944", label: "🌿 Preparing" },
    out_for_delivery: { color: "#4488ff", label: "🚚 Out for Delivery" },
    delivered: { color: "#44aa66", label: "✅ Delivered" },
    cancelled: { color: "#888", label: "❌ Cancelled" },
  }

  return (
    <div style={{ background: "#0E0A0C", minHeight: "100vh", padding: "60px 48px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "12px", color: "#D4AF37", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "8px" }}>Your Account</div>
          <h1 style={{ fontSize: "44px", fontWeight: "400", color: "#FAF5EF", margin: 0 }}>
            Order <span style={{ color: "#D4AF37", fontStyle: "italic" }}>History</span>
          </h1>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#9E8C94", fontFamily: "sans-serif" }}>
            Loading your orders...
          </div>
        ) : orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: "64px", marginBottom: "20px" }}>🌸</div>
            <div style={{ fontSize: "18px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "24px" }}>
              You haven't placed any orders yet
            </div>
            <button onClick={() => setPage("shop")} style={{
              padding: "14px 40px", background: "linear-gradient(135deg, #800020, #4B2E39)",
              border: "1px solid #D4AF37", borderRadius: "8px", color: "#D4AF37",
              fontSize: "14px", cursor: "pointer", letterSpacing: "2px",
              textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "700",
            }}>Shop Now</button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {orders.map((order) => {
              const status = STATUS_STYLES[order.status] || STATUS_STYLES.placed
              return (
                <div key={order.id} style={{
                  background: "#1A1014", border: "1px solid #4B2E39",
                  borderRadius: "20px", overflow: "hidden",
                }}>
                  {/* Order Header */}
                  <div style={{
                    padding: "20px 28px", borderBottom: "1px solid #4B2E3955",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    flexWrap: "wrap", gap: "12px",
                  }}>
                    <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "1px" }}>Order ID</div>
                        <div style={{ fontSize: "14px", color: "#FAF5EF", fontFamily: "sans-serif", fontWeight: "600" }}>#{order.id.slice(0, 8).toUpperCase()}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "1px" }}>Date</div>
                        <div style={{ fontSize: "14px", color: "#FAF5EF", fontFamily: "sans-serif" }}>
                          {new Date(order.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "1px" }}>Payment</div>
                        <div style={{ fontSize: "14px", color: "#FAF5EF", fontFamily: "sans-serif", textTransform: "capitalize" }}>{order.payment_method}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      <div style={{
                        padding: "6px 14px", borderRadius: "20px",
                        border: `1px solid ${status.color}`,
                        background: `${status.color}22`,
                        color: status.color, fontSize: "12px",
                        fontFamily: "sans-serif", fontWeight: "600",
                      }}>{status.label}</div>
                      <div style={{ fontSize: "20px", color: "#D4AF37", fontWeight: "700", fontFamily: "sans-serif" }}>
                        ₹{Number(order.total).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div style={{ padding: "20px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Items</div>
                      <div style={{ fontSize: "13px", color: "#FAF5EF", fontFamily: "sans-serif", lineHeight: "1.8" }}>
                        {order.items.split(", ").map((item, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ color: "#D4AF37" }}>✿</span> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "#9E8C94", fontFamily: "sans-serif", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>Delivery Address</div>
                      <div style={{ fontSize: "13px", color: "#FAF5EF", fontFamily: "sans-serif", lineHeight: "1.8" }}>
                        {order.address}<br />
                        {order.city} — {order.pincode}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div style={{ padding: "0 28px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                      {["placed", "preparing", "out_for_delivery", "delivered"].map((s, i) => {
                        const steps = ["placed", "preparing", "out_for_delivery", "delivered"]
                        const currentIdx = steps.indexOf(order.status)
                        const isDone = i <= currentIdx
                        return (
                          <div key={s} style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <div style={{
                              width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0,
                              background: isDone ? "#D4AF37" : "#4B2E39",
                              border: `2px solid ${isDone ? "#D4AF37" : "#4B2E39"}`,
                            }} />
                            {i < 3 && <div style={{ flex: 1, height: "2px", background: i < currentIdx ? "#D4AF37" : "#4B2E39" }} />}
                          </div>
                        )
                      })}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                      {["Placed", "Preparing", "On the way", "Delivered"].map((label) => (
                        <div key={label} style={{ fontSize: "10px", color: "#9E8C94", fontFamily: "sans-serif" }}>{label}</div>
                      ))}
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState("home")
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")

  const addToCart = (product) => {
    setCart((prev) => {
      const key = `${product.id}-${product.selectedType}-${product.selectedGrams}`
      const existing = prev.find((i) => i.cartKey === key)
      if (existing) return prev.map((i) => i.cartKey === key ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, cartKey: key, qty: 1 }]
    })
  }

  const updateQty = (cartKey, delta) => {
    setCart((prev) => prev
      .map((i) => i.cartKey === cartKey ? { ...i, qty: i.qty + delta } : i)
      .filter((i) => i.qty > 0)
    )
  }

  const removeFromCart = (cartKey) => {
    setCart((prev) => prev.filter((i) => i.cartKey !== cartKey))
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setPage("home")
  }

  return (
    <div>
      <Navbar cartCount={cartCount} setPage={setPage} user={user} onSignOut={handleSignOut} setSearch={setSearch} />
      {page === "home" && <><Hero setPage={setPage} /><Products onAdd={addToCart} setPage={setPage} /></>}
      {page === "about" && <About />}
      {page === "contact" && <Contact setPage={setPage} />}
      {page === "auth" && <Auth setUser={setUser} setPage={setPage} />}
      {page === "cart" && <Cart cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} setPage={setPage} addToCart={addToCart} />}
      {page === "shop" && <Shop onAdd={addToCart} search={search} />}
      {page === "admin" && <Admin user={user} setPage={setPage} />}
      {page === "checkout" && <Checkout cart={cart} user={user} setPage={setPage} setCart={setCart} />}
      {page === "orders" && <OrderHistory user={user} setPage={setPage} />}
    </div>
  )
} 