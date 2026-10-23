import urllib.request
import json
import os
import sys

# Load from .env if present
env_file = os.path.join(os.path.dirname(__file__), "..", ".env")
env_vars = {}
if os.path.exists(env_file):
    with open(env_file, "r") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                env_vars[k.strip()] = v.strip()

token = os.environ.get("SUPABASE_ACCESS_TOKEN") or env_vars.get("SUPABASE_ACCESS_TOKEN")
project_ref = os.environ.get("SUPABASE_PROJECT_REF") or env_vars.get("SUPABASE_PROJECT_REF")

if not token or not project_ref:
    print("Error: SUPABASE_ACCESS_TOKEN and SUPABASE_PROJECT_REF are required.")
    sys.exit(1)

url = f"https://api.supabase.com/v1/projects/{project_ref}/database/query"
base_dir = os.path.join(os.path.dirname(__file__), "..")

for rel_path in ["supabase/schema.sql", "supabase/seed.sql"]:
    full_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(full_path):
        continue
    with open(full_path, "r") as f:
        sql = f.read()

    print(f"Applying {rel_path} to Supabase project {project_ref}...")
    req = urllib.request.Request(
        url,
        data=json.dumps({"query": sql}).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        },
        method="POST"
    )
    try:
        with urllib.request.urlopen(req) as resp:
            print(f"Success applying {rel_path}: HTTP {resp.status}")
    except urllib.error.HTTPError as e:
        print(f"Error applying {rel_path}: {e.code} - {e.read().decode('utf-8')}")
